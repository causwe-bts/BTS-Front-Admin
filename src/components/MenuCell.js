import Link from 'next/link';
import classNames from 'classnames';
import styles from './MenuCell.module.css';

export default function MenuCell({ menu, className }) {
  return (
      <div className={classNames(className, styles.container)}>
        <div>
          <img src={menu.imgURL}></img>
        </div>
        <div>
          <h3>{menu.name}</h3>
          <br />
          {menu.price}원
          <br />
          {menu.description}
        </div>
      </div>
  );
}
