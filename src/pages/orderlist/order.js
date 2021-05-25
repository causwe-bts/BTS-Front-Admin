import Cookies from 'universal-cookie';
import Head from 'next/head';
import Router from 'next/router';
import styles from 'pages/index.module.css';
import { useEffect, useState } from 'react';
import OrderCell from 'components/OrderCell.js';

import { getOrder } from 'api/order';

export default function Orderlist() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrder().then((resorders) => {
      setOrders(resorders);
    });
  }, []);
  return (
    <div className={styles.container}>
        <div>주문 요청</div>
        <div>
          {orders.map((order) => {
            return <OrderCell order={order} className={styles.menu} key={order.name} />;
          })}
        </div>
        <div>조리중</div>
        <div>

        </div>
    </div>
  );
}

