import Cookies from 'universal-cookie';
import Head from 'next/head';
import Router from 'next/router';
import styles from './signin.module.css';

export default function Login() {
  function onSubmit(e) {
    var cookies = new Cookies();
    cookies.set('auth', 'sample_token');
    Router.push('/menu');
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
          <button onClick={onSubmit}>Sign In</button>
        </div>
      </div>
    </div>
  );
}