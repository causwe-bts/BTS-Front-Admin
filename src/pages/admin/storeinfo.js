import { useEffect, useState } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import MenuCell from 'components/MenuCell';
import { getMenu } from 'api/menu';
import { getStoreinfo } from 'api/storeInfo';
import styles from './storeinfo.module.css';

export default function StoreInfo() {
  const [menus, setMenus] = useState([]);
  const [store, setStoreinfo] = useState({});

  useEffect(() => {
    getMenu()
      .then((resmenus) => {
        setMenus(resmenus);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  useEffect(() => {
    getStoreinfo()
      .then((resstoreinfo) => {
        setStoreinfo(resstoreinfo);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza BTS Store Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className={styles.sub}>{store.name}</h1>
        <br />
        <div>
          <h1 className={styles.sub}>영업시간</h1>
          <h3 className={styles.time}>{store.time}</h3>
          <br />
        </div>
        <br />
        <div className={styles.container}>
          <h1 className={styles.sub}>MENU</h1>
          <div>
            {menus.map((menu) => {
              return <MenuCell menu={menu} className={styles.menu} key={menu.name} />;
            })}
          </div>
        </div>
      </div>

      <div className="container">
        <Link href="/ordermanage">
          <button className={`btn btn-secondary ${styles.input_button}`}>주문관리</button>
        </Link>
        <Link href="/storeinfo">
          <button className={`btn btn-secondary ${styles.input_button}`}>가게정보</button>
        </Link>
        <Link href="/soldlist">
          <button className={`btn btn-secondary ${styles.input_button}`}>판매내역</button>
        </Link>
      </div>
    </div>
  );
}
