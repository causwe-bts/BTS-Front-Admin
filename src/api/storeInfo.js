import Cookies from 'universal-cookie';
import axios from '../../node_modules/axios/index';
import { resolve } from '../../node_modules/uri-js/dist/es5/uri.all';
import { token } from './user';

export const getStoreinfo = () => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: '/api/store/storeinfo',
      headers: {
        Authorization: `Bearer ${token()}`,
      },
    })
      .then((res) => {
        resolve(res.data.body.storeInfo);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
