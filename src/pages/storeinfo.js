import { useEffect, useState } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import MenuCell from '../components/MenuCell';
import { getMenu } from 'api/menu';
import styles from './storeinfo.module.css';

export default function StoreInfo() {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    getMenu().then((resmenus) => {
      setMenus(resmenus);
    });
  }, []);
  const store = {
    name: 'BTS CAU pizza',
    time: 'AM 09:00 ~ PM 10:00',
    location: '서울특별시 동작구 흑석로',
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza BTS Store Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div>{store.name}</div>
        <br />
        <div>
          영업시간
          <br />
          {store.time}
        </div>
        <br />
        <div>MENU</div>
        <div>
          {menus.map((menu) => {
            return <MenuCell menu={menu} className={styles.menu} key={menu.name} />;
          })}
        </div>
      </div>

      <br />
      <div>
        <Link href="/ordermanage">
          <button>주문관리</button>
        </Link>
        <Link href="/storeinfo">
          <button>가게정보</button>
        </Link>
        <Link href="/soldlist">
          <button>판매내역</button>
        </Link>
      </div>
    </div>
  );
}
