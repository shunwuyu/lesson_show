import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import './index.css';
import 'element-theme-default';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
 document.getElementById('root'));
registerServiceWorker();
