const Controller = require('egg').Controller;
const fs = require('fs');
const util = require('util');
const readFilePromise = util.promisify(fs.readFile);
const path = require('path');

class PageController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.response.type = 'html';
    let page = await readFilePromise(path.resolve(__dirname, '../public/client/dist/index.html'))
    ctx.body = page
  }
}

module.exports = PageController;