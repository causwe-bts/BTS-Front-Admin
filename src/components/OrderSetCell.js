import Link from 'next/link';
import classNames from 'classnames';
import styles from './OrderSetCell.module.css';

export default function OrderSet({ orderset, className }) {
  return (
    <div className={classNames(className, styles.container)}>
      <h6>주문자 : {orderset.orderer}</h6>
      <h6>
        {orderset.order[0].menu_id} 외 {orderset.order.length}건
      </h6>
      {/* <h6>
        가격 :
        {orderset.order
          .map((order) => order.menu.price * order.qua)
          .reduce((a, b) => {
            return a + b;
          }, 0)}
        원
      </h6> */}
      <h6>
        주문시각 : {orderset.datetime.split('T')[0]} {orderset.datetime.split('T')[1].split('.')[0]}
      </h6>
      <br />
    </div>
  );
}
