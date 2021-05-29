import axios from '../../node_modules/axios/index';
import { token } from './user';

export const getOrderlist = () => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: '/api/store/orderlist',
      headers: {
        Authorization: `Bearer ${token()}`,
      },
    })
      .then((res) => {
        resolve(res.data.body.orderList);
      })
      .catch((err) => {
        reject(err);
      });
    });
  };
  