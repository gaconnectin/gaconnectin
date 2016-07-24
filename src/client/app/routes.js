import React                                         from 'react';
import ReactDOM                                      from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App              from './App.jsx'
import CreateUser       from './CreateUser.jsx';
import LoginUser        from './LoginUser.jsx';
import SearchForm       from './SearchForm.jsx';
import Profile          from './Profile.jsx';
import MainProfile      from './MainProfile.jsx';
import ProfileTesting   from './ProfileTesting.jsx';
import ProfileList      from './ProfileList.jsx';
import NotFound         from './NotFound.jsx';
import SearchOption     from './SearchOption.jsx';


module.exports = (
    <Route path="/" component={App}>
      {/* add the routes here */}
      <IndexRoute component={SearchForm}/>
      <Route component={SearchOption} />
       <Route path='heiditest/user/:userId' component={ProfileList}/>
      <Route path='heiditest' component={ProfileTesting}/>
      <Route path='login' component={LoginUser}/>
      <Route path='create-account' component={CreateUser} />
      <Route path='logout' component={SearchForm} />
      <Route path='profile/user/:userID' component={MainProfile} />
      <Route path='user/:userId' component={ProfileList}/>
      <Route path='*' component={NotFound} />
    </Route>

)
