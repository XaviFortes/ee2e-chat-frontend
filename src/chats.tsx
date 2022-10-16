/* @refresh reload */
import { render } from 'solid-js/web';

import './styles/index.css';
import Chats from './apps/Chats';
import Messages from './apps/Messages';
import { createSignal } from 'solid-js';



render(() => <Chats />, document.getElementById('chats') as HTMLElement);
render(() => <Messages/>, document.getElementById('messages') as HTMLElement);


