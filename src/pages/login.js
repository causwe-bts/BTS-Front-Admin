import Head from 'next/head';
import Router from 'next/router';
import { signin } from 'api/user';
import styles from './login.module.css';

export default function Login() {
  function onSubmit(e) {
    signin("clerk01", "q1w2e3")
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
