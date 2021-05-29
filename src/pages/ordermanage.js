import { useEffect, useState } from 'react';

import Link from 'next/link';
import OrderSetCell from 'components/OrderSetCell.js';
import axios from 'axios';
import { getOrder_Requested } from 'api/order_requested';
import { getOrder_Ing } from 'api/order_ing';
import { manage } from 'api/ordermanage';
import styles from './ordermanage.module.css';

export default function Orderlist() {
  const [order_requested, setOrder_Requested] = useState([]);
  useEffect(() => {
    getOrder_Requested().then((resorders) => {
      setOrder_Requested(resorders);
    });
  }, []);
  const [order_ing, setOrder_Ing] = useState([]);
  useEffect(() => {
    getOrder_Ing().then((resorders) => {
      setOrder_Ing(resorders);
    });
  }, []);
  function accept(e) {
    manage()
  }
  function reject(e) {
    axios({
      method: 'PUT',
      url: 'api/user/signin',
      data: {
        id: 'hi',
        password: 'hi',
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function finished(e) {
    axios({
      method: 'PUT',
      url: 'api/user/signin',
      data: {
        id: 'hi',
        password: 'hi',
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className={styles.container}>
      <div>주문 요청</div>
      <div>
        {order_requested.map((order) => {
          return (
            <>
              <OrderSetCell orderset={order} className={styles.menu} key={order.orderer} />
              <button onClick={accept}>수락</button>
              <button onClick={reject}>거절</button>
            </>
          );
        })}
      </div>
      <div>조리중</div>
      <div>
        {order_ing.map((order) => {
          return (
            <>
              <OrderSetCell orderset={order} className={styles.menu} key={order.orderer} />
              <button onClick={finished}>수령 처리</button>
            </>
          );
        })}
      </div>
      <div>
        <Link href="/ordermanage">
          <button>주문 관리</button>
        </Link>
        <Link href="/storeinfo">
          <button>가게 정보</button>
        </Link>
        <Link href="/soldlist">
          <button>판매 내역</button>
        </Link>
      </div>
    </div>
  );
}
