'use strict';

const Controller = require('egg').Controller;

class TopicController extends Controller {
  async topicDetail () {
    const { ctx } = this;
    const {topicId} = ctx.request.query
    let topicDetail = await ctx.service.topic.topicDetailHandler(topicId);
    ctx.returnBody(200, "成功", topicDetail); 
  }
  async addTopic () { 
    const { ctx } = this;
    const { topicImg, topicTitle } = ctx.request.body;
    let userId = ctx.user.userId

    let newTopic = {
      topicImg: JSON.stringify(topicImg),
      topicTitle: topicTitle,
      userId
    }

    console.log(newTopic, '----------');

    await ctx.service.topic.insertTopic(newTopic);
    ctx.returnBody(200, '发贴成功');
  }

  async friendsTopicList() {
    // 关注者[] 自己  
    // topic in 
    const { ctx } = this;
    let userId = ctx.user.userId;

    //关注
    let follower = await ctx.service.follow.findFollow({
      followedId: userId,
      status: 1
    })
    // console.log(follower);
    let followList = follower.map((item) => {
      return item.userId
    })
    followList.push(userId);

    const Op = this.app.Sequelize.Op;
    let topics = await ctx.service.topic.queryTopicList({
      userId: {
        [Op.in]: followList
      }
    })

    // userinfo 
    let topicList = [];
    for (let topic of topics) {
      let item = await ctx.service.topic.topicDetailHandler(topic.topicId);
      // console.log(item);
      topicList.push(item);
    }

    topicList && ctx.returnBody(200, "成功", topicList);
  }

  async addDiscuss() {
    const {ctx} = this;
    const { topicId , replyContent } = ctx.request.body

    let userId = ctx.user.userId;
    // discuss userId username 存一个冗余
    let user = await this.service.user.getUserByUserId(userId);

    let newDiscuss = {
      tipicId: topicId,
      replyContent: replyContent,
      replyName: user.username,
      userId
    }

    let discuss = await ctx.service.topic.insertDiscuss(newDiscuss);
    
    discuss && ctx.returnBody(200, "评论成功");
    !discuss && ctx.returnBody(400, "网络异常，请重试");
  }

  async putLikeTopic() {
    let { ctx } = this;
    let { topicId, status } =  ctx.request.body;
    let userId = ctx.user.userId;

    let topicStauts = {
      topicId,
      userId,
      status
    }
    
    // 点赞 create 取消点赞 update
    let query = {
      topicId,
      userId
    }

    console.log(query, '--------------');

    await ctx.service.topic.putTopicLike(query, topicStauts);
    ctx.returnBody(200, "更新成功", {
      status: +status
    })

  }
} 

module.exports = TopicController;