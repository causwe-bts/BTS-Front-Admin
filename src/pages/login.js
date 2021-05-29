import Cookies from 'universal-cookie';
import Head from 'next/head';
import Router from 'next/router';
import styles from './login.module.css';
import { signin } from 'api/user';

export default function Login() {
  function onSubmit(e) {
    signin("bts", "bts")
    .then((token) => {
      
    })
    Router.push('/ordermanage');
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza BTS Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>Login</div>
        <div>
          <input placeholder="id" />
          <input placeholder="password" />
          <button onClick={onSubmit}>Log In</button>
        </div>
      </div>
    </div>
  );
}
