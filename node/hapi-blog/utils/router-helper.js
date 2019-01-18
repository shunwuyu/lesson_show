const Joi = require('joi');

const paginationDefine = {
  limit: Joi.number().required().min(1).max(30)
    .description('限制返回的数量，默认 15'),
  page: Joi.number().integer().min(1).required()
    .description('当前页码，默认 1'),
  pagination: Joi.boolean().required().description('是否开启分页功能，默认开启'),
};

const jwtHeaderDefine = {
  headers: Joi.object({
    authorization: Joi.string().max(200).required(),
  }).unknown(),
};

const blogMetadataDefine = {
  blogData: Joi.object().keys({
    title: Joi.string().max(50).required().description('标题'),
    tag: Joi.array().sparse(false).items(Joi.string()).unique()
      .max(10)
      .required()
      .description('标签'),
    content: Joi.string().min(10).max(60000).required()
      .description('内容'),
    short: Joi.string().min(10).max(1000).required()
      .description('概述'),
  }).required()
};

module.exports = {
  paginationDefine,
  jwtHeaderDefine,
  blogMetadataDefine
};