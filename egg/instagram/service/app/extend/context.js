const jwt = require('jsonwebtoken');

module.exports = {
  get jwt() {
    return jwt
  },
  get user() {
    console.log('--------------------');
    let token = this.cookies.get('token');
    let user = jwt.verify(token, this.app.config.jwtSecret);
    return user;
  },
  returnBody(status, message, data={}) {
    this.status = status
    this.body = {
      data,
      message: message,
      success: true
    }
  }
}
