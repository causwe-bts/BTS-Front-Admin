import Cookies from 'universal-cookie';
import axios from 'axios';
import { resolve } from '../../node_modules/uri-js/dist/es5/uri.all';
import { token } from './user';

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
        resolve(res.data.orderList);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
