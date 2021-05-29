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

      <h1 className={styles.sub}>판매내역</h1>
      <br />

      {orderSet.map((order) => {
        return <OrderSet orderset={order}></OrderSet>;
      })}
      <div className="container">
        <Link href="/ordermanage">
          <button className={`btn btn-secondary ${styles.input_button}`}>주문관리</button>
        </Link>
        <Link href="/storeinfo">
          <button className={`btn btn-secondary ${styles.input_button}`}>가게정보</button>
        </Link>
        <Link href="/soldlist">
          <button className={`btn btn-secondary ${styles.input_button}`}>판매내역</button>
        </Link>
      </div>
    </div>
  );
}
