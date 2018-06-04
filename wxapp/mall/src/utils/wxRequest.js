import wepy from 'wepy';

const wxRequest = async(params = {}, url) => {
  let res = await wepy.request({
      url: url,
      method: params.method || 'GET',
      data: params.query || {},
      header: { 'Content-Type': 'application/json' },
  });
  return res;
};


module.exports = {
  wxRequest
}