import classNames from 'classnames';
import styles from './OrderSetCell.module.css';

export default function OrderSet({ orderset, className }) {
  return (
    <div className={classNames(className, styles.container)}>
      <div>{orderset.orderer}</div>
      <div>
        {orderset.order
          .map((order) => order.menu.price * order.qua)
          .reduce((a, b) => {
            return a + b;
          }, 0)}
      </div>
      <div>{orderset.datetime}</div>
    </div>
  );
}
