/* @refresh reload */
import { render } from 'solid-js/web';

import './styles/index.css';
import App from './apps/Login';


render(() => <App />, document.getElementById('login') as HTMLElement);
