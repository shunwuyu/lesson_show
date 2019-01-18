const Joi = require('joi');

const GROUP_NAME = 'blog';
const Boom = require('boom');
const models = require('../../models');
const { paginationDefine, jwtHeaderDefine, blogMetadataDefine } = require('../../utils/router-helper');
const getList = require('./getlist');
const getDetail = require('./getDetail');
const createBlog = require('./createblog');

module.exports = [
  getList(GROUP_NAME, { paginationDefine, models }),
  getDetail(GROUP_NAME, { Joi, models, Boom }),
  createBlog(GROUP_NAME, {
    jwtHeaderDefine, models, blogMetadataDefine
  }),
];