import { useEffect, useState } from 'react';

import Cookies from 'universal-cookie';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import classNames from 'classnames';
import styles from 'pages/index.module.css';

export default function Home() {
  const [orderSet, setOrderSet] = useState([]);
  useEffect(() => {
    const cookies = new Cookies();
    if (cookies.get('auth')) {
      Router.push('/orderlist/order');
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza BTS Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Link href="/login">
          <button>관리자 로그인</button>
        </Link>
      </div>
    </div>
  );
}
