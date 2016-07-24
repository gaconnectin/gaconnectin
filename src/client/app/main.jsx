import App from './App.jsx';
require('bootstrap/dist/css/bootstrap.css');
require('../css/styles.css')

import React                                         from 'react';
import ReactDOM                                      from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes'



// import CreateUser       from './CreateUser.jsx';
// import LoginUser        from './LoginUser.jsx';
// import SearchForm       from './SearchForm.jsx';
// import Profile          from './Profile.jsx';
// import MainProfile      from './MainProfile.jsx';
// import ProfileTesting   from './ProfileTesting.jsx';
// import ProfileList      from './ProfileList.jsx';
// import NotFound         from './NotFound.jsx';
// import SearchOption     from './SearchOption.jsx';




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
  <Router routes={routes} histor={browserHistory}/>
), document.getElementById('container'))
