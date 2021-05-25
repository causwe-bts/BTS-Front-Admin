import { useEffect, useState } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import OrderSet from 'components/OrderSetCell';
import { getSoldlist } from 'api/soldlist';
import styles from './storeinfo.module.css';

export default function SoldList() {
  const [orderSet, setOrderSet] = useState([]);

  useEffect(() => {
    getSoldlist().then((soldList) => {
      setOrderSet(soldList);
      console.log(soldList);
    });
  }, []);
  const store = {
    name: 'BTS CAU pizza',
    time: 'AM 09:00 ~ PM 10:00',
    location: '서울특별시 동작구 흑석로',
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza BTS Sold List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>판매내역</div>
      <br />

      {orderSet.map((order) => {
        return <OrderSet orderset={order}></OrderSet>;
      })}
      <div>
        <Link href="/ordermanage">
          <button>주문관리</button>
        </Link>
        <Link href="/storeinfo">
          <button>가게정보</button>
        </Link>
        <Link href="/soldlist">
          <button>판매내역</button>
        </Link>
      </div>
    </div>
  );
}
