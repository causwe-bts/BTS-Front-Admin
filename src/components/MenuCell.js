import classNames from 'classnames';
import styles from './MenuCell.module.css';

export default function MenuCell({ menu, className }) {
  return (
    <div className={classNames(className, styles.container)}>
      <img src={menu.imgurl}></img>
      <div>{menu.name}</div>
      <div>{menu.price}</div>
      <div>{menu.description}</div>
      <br />
    </div>
  );
}
