import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './18_router/Lesson';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './18_router/components/home/home';
import Contacts from './18_router/components/contacts/contacts';
import Posts from './18_router/components/posts/posts';

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contacts' component={Contacts} />
        <Route exact path='/posts' component={Posts} />
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
