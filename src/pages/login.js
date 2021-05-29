import Head from 'next/head';
import Router from 'next/router';
import { signin } from 'api/user';
import styles from './login.module.css';
import { useState } from 'react';

export default function Login() {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  function onSubmit(e) {
    signin(inputs.username, inputs.password)
      .then(() => {
        console.log('여기 실행돼야함');
        Router.push('/ordermanage');
      })
      .catch(() => {
        alert('로그인 할 수 없습니다.');
      });
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
          <input name="username" onChange={onChange} value={inputs.username} placeholder="id" />
          <input
            name="password"
            onChange={onChange}
            value={inputs.password}
            placeholder="password"
          />
          <button onClick={onSubmit}>Log In</button>
        </div>
      </div>
    </div>
  );
}
