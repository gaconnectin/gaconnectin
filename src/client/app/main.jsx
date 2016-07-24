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




export default class Index extends React.Component{

 constructor() {

    // we also need to wake up our ancestors
    super();

    // here's our state
    if (localstorage.token) {
      this.state = {
        userLoggedIn: true,
        skills: [
          "CSS",
          "HTML",
          "Javascript"
        ],
        interests: []
      }
    } else {
      this.state = {
        userLoggedIn: false,
        skills: [
          "CSS",
          "HTML",
          "Javascript"
        ],
        interests: []
      }
    }

    console.log("userLoggedIn = ", this.state.userLoggedIn);
  }

 getSkills() {
    //console.log({this.state.skills});
    console.log('hello')
  }


}



ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      {/* add the routes here */}
      <IndexRoute component={SearchForm}/>
      <Route path='/login' component={LoginUser} dummy={x=>x}/>
      <Route path='/create-account' component={CreateUser} />
      <Route path='/logout' component={SearchForm} />
      <Route path='/profile/user/:userID' component={MainProfile} />

    </Route>
  </Router>
), document.getElementById('container'))
