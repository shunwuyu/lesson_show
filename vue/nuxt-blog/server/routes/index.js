import axios from 'axios'
import Router from 'koa-router'
import config from '../config'
import db from '../models'

const router = new Router();
const user = require('../controllers/user')

router
  .patch('/api/user', user.patchUserInfo)
  .post('/api/login', user.login)

export default router
