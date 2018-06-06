import {
  wxRequest
} from '@/utils/wxRequest';

const apiMall = 'https://sujiefs.com'

const wxJsCode2Session = (params) => wxRequest(params, apiMall + "api/wechat/jscode2session");

const getAdList = (params) => wxRequest(params, apiMall + '/api/adverts/list');

const getHomeDisvocerList = (params) => wxRequest(params, apiMall + '/api/mall/discoverList');

export default {
  wxJsCode2Session,
  getAdList,
  getHomeDisvocerList
}