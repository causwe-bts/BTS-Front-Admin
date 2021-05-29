import axios from 'axios';
import {token} from './user';

export const manage = (o_id, new_status) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'PUT',
      url: '/api/store/ordermanage',
      headers: {
        Authorization: `Bearer ${token()}`,
      },
      data: {
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
