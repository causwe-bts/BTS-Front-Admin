import Cookies from 'universal-cookie';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import classNames from 'classnames';
import styles from 'pages/index.module.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const cookies = new Cookies();
    if (cookies.get('auth')) {
      Router.push('/menu');
    }
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza BTS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Link href="/signin">
          <button>로그인</button>
        </Link>
        <Link href="/signup">
          <button>회원가입</button>
        </Link>
      </div>
    </div>
  );
}
