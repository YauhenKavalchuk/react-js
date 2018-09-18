import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './16_api/containers/news/news';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
