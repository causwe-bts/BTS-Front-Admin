import Link from 'next/link';
import styles from 'pages/index.module.css';
import { useEffect, useState } from 'react';
import OrderSetCell from 'components/OrderSetCell.js';
import { getOrder } from 'api/order';
import axios from '../../../node_modules/axios/index';

export default function Orderlist() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrder().then((resorders) => {
      setOrders(resorders);
    });
  }, []);
  function accept(e) {
    axios({
      method : "PUT",
      url : "api/user/signin",
      data : {
        id : "hi",
        password : "hi"
      }
    }).then(res=>{
      console.log(res);
    }).catch(error=>{
      console.log(error);
    })
  }
  function reject(e) {
    axios({
      method : "PUT",
      url : "api/user/signin",
      data : {
        id : "hi",
        password : "hi"
      }
    }).then(res=>{
      console.log(res);
    }).catch(error=>{
      console.log(error);
    })
  }
  function finished(e) {
    axios({
      method : "PUT",
      url : "api/user/signin",
      data : {
        id : "hi",
        password : "hi"
      }
    }).then(res=>{
      console.log(res);
    }).catch(error=>{
      console.log(error);
    })
  }
  return (
    <div className={styles.container}>
        <div>주문 요청</div>
        <div>
          {orders.map((order) => {
            return (
              <>
                <OrderSetCell orderset={order} className={styles.menu} key={order.orderer} />
                <button onClick={accept}>수락</button>
                <button onClick={reject}>거절</button>
              </>
          )})}
        </div>
        <div>조리중</div>
        <div>
          {orders.map((order) => {
            return (
              <>
                <OrderSetCell orderset={order} className={styles.menu} key={order.orderer} />
                <button onClick={finished}>수령 처리</button>
              </>
          )})}
        </div>
        <div>
          <Link href="">
            <button>주문 관리</button>
          </Link>
          <Link href="">
            <button>가게 정보</button>
          </Link>
          <Link href="">
            <button>판매 내역</button>
          </Link>
        </div>
    </div>
  );
}