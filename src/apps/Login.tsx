import type { Component } from 'solid-js';

import logo from '../assets/logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src="https://media.tenor.com/yWPy6d2FJ9oAAAAC/big-floppa.gif" class={styles.logo} alt="logo" />
        <p>
          Login
        </p>
        Submit form to login
        <iframe name="hiddenFrame" width="0" height="0" style="display: none;"></iframe>
        <form action="http://127.0.0.1:8080/api/auth/signin" method="post" target="hiddenFrame">
          <label for="email">email</label>
          <input type="text" id="email" name="email" />
          <label for="password">Password</label>
          <input type="password" id="password" name="password" />
          <button type="submit" onClick={() => {setTimeout(function() {window.location.href = "/chat.html";},2000)}}>Login</button>
        </form>

      </header>
    </div>
  );
};

export default App;
