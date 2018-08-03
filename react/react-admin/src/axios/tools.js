import axios from 'axios';
import { message } from 'antd';
export const get = ({url, msg = '接口异常', headers}) =>
    axios.get(url, headers).then(res => res.data).catch(err => {
       console.log(err);
       message.warn(msg);
    });
