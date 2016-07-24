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
import ProfileTesting   from './ProfileTesting.jsx';
import ProfileList      from './ProfileList.jsx';
import NotFound         from './NotFound.jsx';




export default class Index extends React.Component{

 constructor() {

    // we also need to wake up our ancestors
    super();

    // here's our state
    this.state = {
      userLoggedIn: false,
    }
  }

}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      {/* add the routes here */}
      <IndexRoute component={SearchForm}/>
      <Route path='heiditest/user/:userId' component={ProfileList}/>
      <Route path='heiditest' component={ProfileTesting}/>
      <Route path='login' component={LoginUser}/>
      <Route path='create-account' component={CreateUser} />
      <Route path='logout' component={SearchForm} />
      <Route path='profile/user/:userID' component={MainProfile} />
      <Route path='user/:userId' component={ProfileList}/>
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
), document.getElementById('container'))
