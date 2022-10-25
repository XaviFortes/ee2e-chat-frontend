import { Component, createSignal } from 'solid-js';

import logo from '../assets/logo.svg';
import styles from './App.module.css';
import swal from 'sweetalert';

async function newChat(chatInfo: { name: string; desc: string; pic_url: string; isPublic: boolean; }) {
  return fetch('http://127.0.0.1:8080/api/chat/createChatRoom', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Access-Control-Allow-Credentials': 'true',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(chatInfo)
  })
    .then(data => data.json())
}

async function joinChat(chatInfo: { chatId: string; }) {
  return fetch('http://127.0.0.1:8080/api/chat/joinChatRoom', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Access-Control-Allow-Credentials': 'true',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(chatInfo)
  })
    .then(data => data.json())
}



const App: Component = () => {
  const [name, setName] = createSignal('');
  const [desc, setDesc] = createSignal('');
  const [picURL, setPicURL] = createSignal('');
  const [chatId, setChatId] = createSignal('');
  const [isOpen, setIsOpen] = createSignal(true);
  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    const response = await newChat({
      name: name(),
      desc: desc(),
      pic_url: picURL(),
      isPublic: isOpen()
    });
    if (response.chat_id) {
      swal("Success!", "Created a chat with id "+ response.chat_id, "success")
      .then((response) => {
        window.location.href = "/chat.html";
      });
    } else {
      swal("Failed", response.message, "error");
    }
  }
  const handleJoinChat = async (event: Event) => {
    event.preventDefault();
    window.location.href = "/chat.html";
    const response = await joinChat({
        chatId: chatId()
    });
  }

  
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src="https://media.tenor.com/yWPy6d2FJ9oAAAAC/big-floppa.gif" class={styles.logo} alt="logo" />
        <p>
          New Chat
        </p>
        Submit form to create a new chat
        <iframe name="hiddenFrame" width="0" height="0" style="display: none;"></iframe>
        <form class="form-Class" onSubmit={handleSubmit}>
          <label for="chatName">Chat Name </label>
          <input type="text" id="chatName" onInput={e => setName(e.currentTarget.value)} />
          <label for="chatDesc">Chat Description </label>
          <input type="text" id="chatDesc" onInput={e => setDesc(e.currentTarget.value)} />
          <label for="chatDesc">Picture URL </label>
          <input type="text" id="PicURL" onInput={e => setPicURL(e.currentTarget.value)} />
          <label for="chatPublic">Make the chat public? </label>
          <input type="checkbox" id="chatPublic" checked={isOpen()} onClick={e => setIsOpen(e.currentTarget.checked)} />
          <button type="submit"> Create! </button>
        </form>
        <p>
          Join a chat
        </p>
        <iframe name="hiddenFrame" width="0" height="0" style="display: none;"></iframe>
        <form class="form-Class" onSubmit={handleJoinChat}>
          <label for="chatId">Chat Id </label>
          <input type="text" id="chatId" onInput={e => setChatId(e.currentTarget.value)} />
          <button type="submit"> Join Chat </button>
        </form>

      </header>
    </div>
  );
};

export default App;