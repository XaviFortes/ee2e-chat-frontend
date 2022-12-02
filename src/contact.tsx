/* @refresh reload */
import { render } from 'solid-js/web';

import './styles/index.css';

render(
    () => <div>hello</div>,
    document.getElementById('root') as HTMLElement
);