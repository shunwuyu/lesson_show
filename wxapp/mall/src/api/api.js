import {
  wxRequest
} from '@/utils/wxRequest';

const apiMall = 'https://sujiefs.com/'

const wxJsCode2Session = (params) => wxRequest(params, apiMall + "api/wechat/jscode2session");

export default {
  wxJsCode2Session
}