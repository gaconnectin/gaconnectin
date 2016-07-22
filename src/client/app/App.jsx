// import the libs we need
import React                          from 'react';
import ReactDOM                       from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Link }                       from 'react-router'

import ajax             from '../helpers/ajaxAdaptor.js';
import util             from '../helpers/util.js';
import Footer           from './Footer.jsx';
import Nav              from './Nav.jsx';
import CreateUser       from './CreateUser.jsx';
import LoginUser        from './LoginUser.jsx';
import SearchForm       from './SearchForm.jsx';
import SearchOption     from './SearchOption.jsx';
import DisplayResults   from './DisplayResult.jsx';
import Profile          from './Profile.jsx';


// create a React Component called _App_


// mount our App at #container
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Nav}>
      {/* add the routes here */}
      <IndexRoute component={SearchForm}>
          <Route path='/:attr' component={SearchOption} />
      </IndexRoute>
      <Route path='/login' component={LoginUser} />
      <Route path='/create-account' component={CreateUser} />
      <Route path='/logout' component={SearchForm} />
      <Route path='/user-profile' component={Profile} />

    </Route>


  </Router>
), document.getElementById('container'))









