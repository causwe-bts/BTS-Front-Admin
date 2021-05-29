import axios from 'axios';

export const getSoldlist = () => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/api/store/soldlist',
      headers: {
        Authorization: `Bearer ${token()}`,
      },
    })
      .then((res) => {
        resolve(res.data.body.soldList);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
