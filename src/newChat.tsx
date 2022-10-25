/* @refresh reload */
import { render } from 'solid-js/web';

import './styles/index.css';
import App from './apps/newChat';


render(() => <App />, document.getElementById('newChat') as HTMLElement);
