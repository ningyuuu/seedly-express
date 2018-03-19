const graph = require('fbgraph');
const { groupid, accessToken } = require('./config');

// // const groupid = '204718579739428';
// const groupid = '155405561806269';

// const accessToken = 'EAACEdEose0cBAAi80YiRBdFS8Q3f1YpZACgZB5Y2yqpP67L7sFlZCWrRaQavvWupIWxIbSNmeZBlvDkh4vvPJzc5V0ZCnRezxSdMNk2XhBK62zql1rS1rPrdJxmWfPPM6Y6CLmmcPyAVZAJ1DIHgzqlDzmqkKOk0hT3TaM0QZA6ZBRxTjSVk1JHGnVjiNfpwxpY7hPtOZAy5LiAZDZD';

graph.setAccessToken(accessToken);

exports.getFeed = () => {
  return new Promise((resolve, reject) => {
    graph.get(`${groupid}?fields=name,feed{created_time,message,comments{message,from,like_count,comments{from,message,created_time,like_count},created_time},full_picture,likes,from,attachments{subattachments{media{image{src}}}}}`, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};
