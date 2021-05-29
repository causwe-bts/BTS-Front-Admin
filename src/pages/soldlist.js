import { useEffect, useState } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import OrderSet from 'components/OrderSetCell';
import { getSoldlist } from 'api/soldlist';
import styles from './soldlist.module.css';

export default function SoldList() {
  const [orderSet, setOrderSet] = useState([]);
  useEffect(() => {
    getSoldlist()
      .then((soldList) => {
        setOrderSet(soldList);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

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
