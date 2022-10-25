import { Component, For, onMount } from 'solid-js';

import logo from '../assets/logo.svg';
import styles from './App.module.css';
import mcss from '../styles/chat.module.css';
import { createSignal, createEffect, onCleanup } from 'solid-js';
import { render } from 'solid-js/web';
import FetchChats from '../components/FetchChats';
import FetchMessages from '../components/FetchMessages';
import SendMessage from '../components/SendMessage';


/*

#29132e
#321450
#860029
#de004e
#f887ff

*/



const Chats: Component = () => {
  
  return (
    <div class={mcss.main}>
      <div class={mcss.Chats}>
        <header class={styles.header}>
          <button class={styles.button} onClick={() => window.location.href = "/"}>Home</button>
          <button class={styles.button} onClick={() => window.location.href = "/newChat.html"}>+</button>
          <div id="chatsM">
            <FetchChats />
          </div>

          <a
            class={mcss.link}
            href="https://github.com/XaviFortes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Xavi Fortes
          </a>
        </header>
      </div>
      <div class={mcss.Messages}>
        <div class={mcss.FMsg}>
          <FetchMessages />
        </div>
        <div class={mcss.sendTextM}>
          <SendMessage />
        </div>
      </div>
    </div>
  );
};

export default Chats;
