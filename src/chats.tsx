/* @refresh reload */
import { render } from 'solid-js/web';

import './styles/index.css';
import Chats from './apps/Chats';
import Messages from './apps/Messages';
import { createSignal } from 'solid-js';

// Redirect to login if not cookie logged in
if (document.cookie === "") {
    window.location.href = "/login";
}


// Check if cookie jwt is expired and redirect to login
const jwt = document.cookie.split("=")[1];
const jwtPayload = JSON.parse(atob(jwt.split(".")[1]));
const jwtExp = jwtPayload.exp;
const now = Math.floor(Date.now() / 1000);
if (now > jwtExp) {
    window.location.href = "/login.html";
}


render(() => <Chats />, document.getElementById('chats') as HTMLElement);
//render(() => <Messages/>, document.getElementById('messages') as HTMLElement);


