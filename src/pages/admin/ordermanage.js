import { useEffect, useState } from 'react';

import Link from 'next/link';
import OrderIngCell from 'components/OrderIngCell.js';
import OrderRequestedCell from 'components/OrderRequestedCell.js';
import { getOrderlist } from 'api/orderlist';
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
  
  let order_requested = orderlist.filter(orders => orders.status === "WaitingForAccept")
  let order_ing = orderlist.filter(orders => orders.status === "Cooking")

  return (
    <div className={styles.container}>
      <div className={`text-center`}>주문 요청</div>
      <div>
        {order_requested.map((order) => {
          return (
            <>
              <OrderRequestedCell order={order} />
            </>
          );
        })}
      </div>
      <div className={`text-center`}>조리중</div>
      <div>
        {order_ing.map((order) => {
          return (
            <>
              <OrderIngCell order={order} />
            </>
          );
        })}
      </div>
      <div className={`btn-group`} className={`text-center`} role={`group`} aria-label={`Basic checkbox toggle button group`}>
        <Link href="/ordermanage">
          <button className={`btn btn-primary`}>주문 관리</button>
        </Link>
        <Link href="/storeinfo">
          <button className={`btn btn-primary`}>가게 정보</button>
        </Link>
        <Link href="/soldlist">
          <button className={`btn btn-primary`}>판매 내역</button>
        </Link>
      </div>
    </div>
  );
}
