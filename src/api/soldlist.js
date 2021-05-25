import axios from '../../node_modules/axios/index';
import menu from './menu';

export const getSoldlist = () => {
  return new Promise((resolve, reject) => {
    resolve([
      {
        orderID: '1',
        orderer: 'james',
        order: [
          {
            menu: {
              name: 'Combination Pizza',
              decription: 'afsdfsadfas',
              price: 10000,
              imgurl:
                'https://blog.kakaocdn.net/dn/nM60l/btq2QUQ7mT5/gw7PwUArETISsLRgqmqcJk/img.png',
            },
            qua: 2,
          },
          {
            menu: {
              name: 'hawaian Pizza',
              decription: 'afsdfsadfas',
              price: 12000,
              imgurl: '',
            },
            qua: 1,
          },
          {
            menu: {
              name: 'pepperoni Pizza',
              decription: 'afsdfsadfas',
              price: 11000,
              imgurl: '',
            },
            qua: 3,
          },
        ],
        datetime: '2021.05.24 09:04',
      },
      {
        orderID: '2',
        orderer: 'tom',
        order: [
          {
            menu: {
              name: 'Combination Pizza',
              decription: 'afsdfsadfas',
              price: 10000,
              imgurl:
                'https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/0e38e373-d468-4ab6-8785-41c8195f5794.jpeg',
            },
            qua: 2,
          },
          {
            menu: {
              name: 'pepperoni Pizza',
              decription: 'afsdfsadfas',
              price: 11000,
              imgurl: '',
            },
            qua: 3,
          },
        ],
        datetime: '2021.05.12 15:34',
      },
      {
        orderID: '3',
        orderer: 'sam',
        order: [
          {
            menu: {
              name: 'hawaian Pizza',
              decription: 'afsdfsadfas',
              price: 12000,
              imgurl:
                'https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/0e38e373-d468-4ab6-8785-41c8195f5794.jpeg',
            },
            qua: 1,
          },
          {
            menu: {
              name: 'pepperoni Pizza',
              decription: 'afsdfsadfas',
              price: 11000,
              imgurl: '',
            },
            qua: 3,
          },
        ],
        datetime: '2021.05.10 15:15',
      },
    ]);
  });
};
