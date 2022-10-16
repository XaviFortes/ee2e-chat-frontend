import { Component, For, onMount } from 'solid-js';

import logo from '../assets/logo.svg';
import styles from './App.module.css';
import { createSignal, createEffect, onCleanup } from 'solid-js';
import { render } from 'solid-js/web';
import FetchChats from '../components/FetchChats';






const Chats: Component = () => {


  
  return (
    <div class={styles.App}>
      <header class={styles.header}>        
        <div id="chatsM">
          <FetchChats />
        </div>
        
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

export default Chats;
