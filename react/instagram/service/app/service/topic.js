const Service = require('egg').Service;

class TopicService extends Service {
  async insertTopic (topic) {
    let { ctx } = this;
    return await ctx.model.Topic.create(topic);
  }

  async queryTopicDetail (query) {
    let { ctx } = this
    return await ctx.model.Topic.findOne({
      where: query
    });
  }

  async topicDetailHandler (topicId) {
    const { ctx } = this;
    let topic = await ctx.service.topic.queryTopicDetail({
      topicId: +topicId
    })
    
  } 

  async queryTopicCounts(query) {
    let { ctx } = this

    return await ctx.model.Topic.findAndCountAll({
      where: query,
      order: [['created_at', 'DESC']]
    })
  }

  async queryTopicList (query) {
    let { ctx } = this;
    return await ctx.model.Topic.findAll({
      where: query,
      order: [['created_at', 'DESC']]
    });
  }

  async topicDetailHandler (topicId) {
    const { ctx } = this;

    let topic =  await ctx.service.topic.queryTopicDetail({
      topicId: +topicId
    });

    let userId = topic.userId;
    let user = await this.service.user.getUserByUserId(userId);

    const topicDetail = {
      userInfo: {
        username: user.username,
        avatarUrl: user.avatarUrl,
        userId: user.userId
      },
      topic: {
        topicImgList: topic.topicImg,
        created_at: topic.created_at,
        topicId
      }
    }

    return topicDetail || {};
  }

  async insertDiscuss (discuss) {
    let {ctx} = this;
    return await ctx.model.Discuss.create(discuss);
  }

  async putTopicLike (query, topicStatus) {
    let { ctx } = this;
    let result = await this.queryTopicLike(query)
    console.log(result, '------------');
    if (!result) {
      return await ctx.model.TopicLike.create(topicStatus);
    } else {
      return await ctx.model.TopicLike.update(topicStatus, {
        where: query
      });
    }
  }

  async queryTopicLike(query) {
    let { ctx } = this;
    
    return await ctx.model.TopicLike.findOne({
      where: query
    });
  }
}

module.exports = TopicService;