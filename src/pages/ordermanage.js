import { useEffect, useState } from 'react';

import Link from 'next/link';
import OrderSetCell from 'components/OrderSetCell.js';
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
  
  let order_requested = orderlist.filter(orders => orders.status === "WaitingForAccept")
  let order_ing = orderlist.filter(orders => orders.status === "Cooking")

  function ordermanage(e) {
    manage("60b1eddfc6ddd3a7f020de03", "Cooking")
  }

  return (
    <div className={styles.container}>
      <div>주문 요청</div>
      <div>
        {order_requested.map((order) => {
          return (
            <>
              <OrderSetCell orderset={order} className={styles.order} key={order.orderer} />
              <button className={`btn btn-success`} onClick={ordermanage}>수락</button>
              <button className={`btn btn-danger`} onClick={ordermanage}>거절</button>
            </>
          );
        })}
      </div>
      <div>조리중</div>
      <div>
        {order_ing.map((order) => {
          return (
            <>
              <OrderSetCell orderset={order} className={styles.order} key={order.orderer} />
              <button className={`btn btn-info`} onClick={ordermanage}>수령 처리</button>
            </>
          );
        })}
      </div>
      <div>
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
