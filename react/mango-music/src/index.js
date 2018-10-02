import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App';
import Root from '@/components/Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
