import type { Component } from 'solid-js';

import logo from '../assets/logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src="https://www.icegif.com/wp-content/uploads/2022/05/icegif-100.gif" class={styles.logo} alt="logo" />
        <p>
          Chat
        </p>
        <a class={styles.link} href="/chat.html">Chats</a>
        <a class={styles.link} href="/login.html">Login</a>
        <a
          class={styles.link}
          href="https://github.com/XaviFortes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Xavi Fortes
        </a>
      </header>
    </div>
  );
};

export default App;
