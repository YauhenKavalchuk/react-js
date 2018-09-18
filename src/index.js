import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './19_router/Lesson';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './19_router/components/home/home';
import Contacts from './19_router/components/contacts/contacts';
import Posts from './19_router/components/posts/posts';
import Post from './19_router/components/post/post';
import Error from './19_router/components/error/error';

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contacts' component={Contacts} />
        <Route exact path='/posts' component={Posts} />
        <Route path='/posts/:id' component={Post} />
        <Route path='*' component={Error} />
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
