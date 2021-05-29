import Link from 'next/link';
import classNames from 'classnames';
import styles from './OrderSetCell.module.css';

export default function OrderSet({ orderset, className }) {
  return (
    <Link
      href={{
        pathname: `/orderset/${orderset.id}`,
        query: orderset,
      }}
    >
      <div className={classNames(className, styles.container)}>
        <div>주문자 : {orderset.orderer}</div>
        {/* <img src={orderset.order[0].menu.imgurl} /> */}
        <div>
          {orderset.order[0].menu_id} 외 {orderset.order.length}건
        </div>
        <div>
          가격 :
          {/* {orderset.order
            .map((order) => order.menu.price * order.qua)
            .reduce((a, b) => {
              return a + b;
            }, 0)} */}
          원
        </div>
        <div>주문시각 : {orderset.datetime}</div>
        <br />
      </div>
    </Link>
  );
}
