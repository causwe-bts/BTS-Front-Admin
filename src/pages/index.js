import Cookies from 'universal-cookie';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import styles from 'pages/index.module.css';
import { useEffect } from 'react';

export default function Home() {
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
