import App from './App.jsx';
require('bootstrap/dist/css/bootstrap.css');
require('../css/styles.css')

import React                                         from 'react';
import ReactDOM                                      from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Link }                                      from 'react-router'


import CreateUser       from './CreateUser.jsx';
import LoginUser        from './LoginUser.jsx';
import SearchForm       from './SearchForm.jsx';
import Profile          from './Profile.jsx';
import MainProfile      from './MainProfile.jsx';
import NotFound         from './NotFound.jsx';



ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      {/* add the routes here */}
      <IndexRoute component={SearchForm}/>
      <Route path='login' component={LoginUser}/>
      <Route path='create-account' component={CreateUser} />
      <Route path='logout' component={SearchForm} />
      <Route path='profile/user/:userID' component={MainProfile} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
), document.getElementById('container'))
