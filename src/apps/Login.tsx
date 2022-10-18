import { Component, createSignal } from 'solid-js';

import logo from '../assets/logo.svg';
import styles from './App.module.css';
import swal from 'sweetalert';

async function loginUser(credentials: { email: string; password: string; }) {
  return fetch('http://127.0.0.1:8080/api/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }



const App: Component = () => {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    const response = await loginUser({
      email: email(),
      password: password()
    });
    if (response.accessToken) {
      console.log(response.accessToken);
      document.cookie = "x-access-token=" + response.accessToken;
      swal("Success!", "You have successfully logged in!", "success")
      .then((response) => {
        
        localStorage.setItem('accessToken', response['accessToken']);
        localStorage.setItem('email', JSON.stringify(response['email']));
        window.location.href = "/chat.html";
      });
    } else {
      swal("Failed", response.message, "error");
    }
  }
  
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src="https://media.tenor.com/yWPy6d2FJ9oAAAAC/big-floppa.gif" class={styles.logo} alt="logo" />
        <p>
          Login
        </p>
        Submit form to login
        <iframe name="hiddenFrame" width="0" height="0" style="display: none;"></iframe>
        <form class="form-Class" onSubmit={handleSubmit}>
          <label for="email">email</label>
          <input type="email" id="email" onInput={e => setEmail(e.currentTarget.value)} />
          <label for="password">Password</label>
          <input type="password" id="password" onInput={e => setPassword(e.currentTarget.value)} />
          <button type="submit"> Login </button>
        </form>

      </header>
    </div>
  );
};

export default App;