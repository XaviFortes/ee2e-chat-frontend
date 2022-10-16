import type { Component } from 'solid-js';
import { createSignal, createEffect, onCleanup } from 'solid-js';
import { render } from 'solid-js/web';

import styles from './App.module.css';
import FetchMessages from '../components/FetchMessages';

const Messages: Component = () => {
  return (
    <div id="messagesM">
      
      <FetchMessages />
    </div>
          
  );
};

export default Messages;
