'use strict';

const Controller = require('egg').Controller;


 
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    
    this.ctx.body = 'hi, egg';
  }

  async rec () {
    const { ctx } = this;
    console.log(ctx.params.id);
    let uid = await this.getRecommender(ctx.params.id);
    this.ctx.body = uid;
  }

  async getRecommender (uid) {
    let { ctx } = this
    console.log(ctx.model.recommender, '+++++++++');
    let rid = await ctx.model.recommender.findOne({
      where: {
        userId: uid
      }
    });
    console.log(rid, '++++++++++++');
    
    return rid;
  
  }
}

module.exports = HomeController;
