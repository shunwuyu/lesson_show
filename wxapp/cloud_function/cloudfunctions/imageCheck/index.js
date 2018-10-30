let AppId = '1253981631';
let SecretId = 'AKIDgSSXel5agp19KWvzGVgzMkAZyNnD8KtU';
let SecretKey = 'qhYTOk79EUoAYxNoeaeHviWVVcnzEl9r';

const cloud = require('wx-server-sdk');
const fs = require('fs');
const path = require('path');
const { ImageClient } = require('image-node-sdk');

cloud.init()
// https://console.cloud.tencent.com/cam/capi
let imageClient = new ImageClient({AppId, SecretId, SecretKey})
console.log(imageClient)
exports.main = async (event, context) => {
  return await imageClient.imgPornDetect({
    formData: {
      image: fs.createReadStream(path.join(__dirname, './test.jpg'))
    },
    headers: {
      'content-type': 'multipart/form-data'
    }
  })
}
