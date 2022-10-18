import { Component, For, onMount } from 'solid-js';

import logo from '../assets/logo.svg';
import styles from './App.module.css';
import { createSignal, createEffect, onCleanup } from 'solid-js';
import { render } from 'solid-js/web';
import FetchChats from '../components/FetchChats';


/*

#29132e
#321450
#860029
#de004e
#f887ff

*/



const Chats: Component = () => {
  
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <button class={styles.button} onClick={() => window.location.href = "/"}>Home</button>
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
