import { useEffect, useState } from 'react';

import Link from 'next/link';
import OrderSetCell from 'components/OrderSetCell.js';
import axios from 'axios';
import { getOrderlist } from 'api/orderlist';
import { manage } from 'api/ordermanage';
import styles from './ordermanage.module.css';

export default function Orderlist() {
  const [orderlist, setOrderlist] = useState([]);
  useEffect(() => {
    getOrderlist().then((resorderlist) => {
      console.log(resorderlist);
      if(resorderlist) {
        setOrderlist(resorderlist);
      }
    });
  }, []);
  function ordermanage(e) {
    manage()
  }

  return (
    <div className={styles.container}>
      <div>주문 요청</div>
      <div>
        {orderlist.map((order) => {
          return (
            <>
              <OrderSetCell orderset={order} className={styles.menu} key={order.orderer} />
              <button onClick={ordermanage}>수락</button>
              <button onClick={ordermanage}>거절</button>
            </>
          );
        })}
      </div>
      <div>조리중</div>
      <div>
        {orderlist.map((order) => {
          return (
            <>
              <OrderSetCell orderset={order} className={styles.menu} key={order.orderer} />
              <button onClick={ordermanage}>수령 처리</button>
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
