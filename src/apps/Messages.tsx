import type { Component } from 'solid-js';
import { createSignal, createEffect, onCleanup } from 'solid-js';
import { render } from 'solid-js/web';

import styles from './App.module.css';
import FetchMessages from '../components/FetchMessages';
import SendMessage from '../components/SendMessage';

const Messages: Component = () => {
  return (
    <div id="rmessagesM">
      <div id="messagesM">

        <FetchMessages />
      </div>
      <div id="sendTextM">
        <SendMessage />
      </div>
    </div>
          
  );
};

export default Messages;
