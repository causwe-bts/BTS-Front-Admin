import { useEffect, useState } from 'react';

import Link from 'next/link';
import OrderCell from 'components/OrderCell.js';
import { getOrder } from 'api/order';
import styles from 'pages/index.module.css';

export default function Orderlist() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrder().then((resorders) => {
      setOrders(resorders);
    });
  }, []);
  function accept(e) {
    var cookies = new Cookies();
    cookies.set('auth', 'sample_token');
    Router.push('/orderlist/order');
  }
  function reject(e) {
    var cookies = new Cookies();
    cookies.set('auth', 'sample_token');
    Router.push('/orderlist/order');
  }
  function finished(e) {
    var cookies = new Cookies();
    cookies.set('auth', 'sample_token');
    Router.push('/orderlist/order');
  }
  return (
    <div className={styles.container}>
      <div>주문 요청</div>
      <div>
        {orders.map((order) => {
          return (
            <>
              <OrderCell order={order} className={styles.menu} key={order.name} />
              <button onClick={accept}>수락</button>
              <button onClick={reject}>거절</button>
            </>
          );
        })}
      </div>
      <div>조리중</div>
      <div>
        {orders.map((order) => {
          return (
            <>
              <OrderCell order={order} className={styles.menu} key={order.name} />
              <button onClick={finished}>수령 처리</button>
            </>
          );
        })}
      </div>
      <div>
        <Link href="/orderlist/order">
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
