import axios from 'axios';
import {token} from './user';

export const manage = (o_id, new_status) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: '/api/store/ordermanage',
      headers: {
        Authorization: `Bearer ${token()}`,
      },
      body: {
        order_id:o_id,
        status:new_status
      }
    })
      .then((res) => {
        resolve(res.data.body);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
