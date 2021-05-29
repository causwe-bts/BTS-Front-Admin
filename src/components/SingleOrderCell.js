import classNames from 'classnames';
import styles from './SingleOrderCell.module.css';

export default function OrderCell({ order, className }) {
  return (
    <div className={classNames(className, styles.container)}>
      <div>{order.name}</div>
      <div>{order.price}</div>
      <div>{order.description}</div>
    </div>
  );
}
