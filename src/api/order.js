export const getOrder = () => {
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
                imgurl: 'http://image.com/cpizza',
              },
              qua: 2,
            },
            {
              menu: {
                name: 'hawaian Pizza',
                decription: 'afsdfsadfas',
                price: 12000,
                imgurl: 'http://image.com/hpizza',
              },
              qua: 1,
            },
            {
              menu: {
                name: 'pepperoni Pizza',
                decription: 'afsdfsadfas',
                price: 11000,
                imgurl: 'http://image.com/ppizza',
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
                imgurl: 'http://image.com/cpizza',
              },
              qua: 2,
            },
            {
              menu: {
                name: 'pepperoni Pizza',
                decription: 'afsdfsadfas',
                price: 11000,
                imgurl: 'http://image.com/ppizza',
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
                imgurl: 'http://image.com/hpizza',
              },
              qua: 1,
            },
            {
              menu: {
                name: 'pepperoni Pizza',
                decription: 'afsdfsadfas',
                price: 11000,
                imgurl: 'http://image.com/ppizza',
              },
              qua: 3,
            },
          ],
          datetime: '2021.05.10 15:15',
        },
      ]);
    });
  };
  