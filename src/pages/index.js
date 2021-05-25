import { useEffect, useState } from 'react';

import Cookies from 'universal-cookie';
import Head from 'next/head';
import Link from 'next/link';
import OrderSet from 'components/OrderSetCell';
import Router from 'next/router';
import classNames from 'classnames';
import { getSoldlist } from 'api/orderset';
import styles from 'pages/index.module.css';

export default function Home() {
  const [orderSet, setOrderSet] = useState([]);
  useEffect(() => {
    const cookies = new Cookies();
    if (cookies.get('auth')) {
      Router.push('/menu');
    }
  }, []);

  useEffect(() => {
    getSoldlist().then((soldList) => {
      setOrderSet(soldList);
      console.log(soldList);
    });
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza BTS Admin Store Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Link href="/orderlist">
          <button>주문관리</button>
        </Link>
        <Link href="/storeinfo">
          <button>가게정보</button>
        </Link>
        <Link href="/soldlist">
          <button>판매내역</button>
        </Link>
      </div>

      {orderSet.map((order) => {
        return <OrderSet orderset={order}></OrderSet>;
      })}
    </div>
  );
}
