import classNames from 'classnames';
import styles from './MenuCell.module.css';

export default function MenuCell({ menu, className }) {
  return (
    <div className={classNames(className, styles.container)}>
      <div>{menu.name}</div>
      <div>{menu.price}</div>
      <div>{menu.description}</div>
    </div>
  );
}
