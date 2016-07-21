// import the libs we need
import React            from 'react';
import ReactDOM         from 'react-dom';

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
export default class App extends React.Component{

 constructor() {

    // we also need to wake up our ancestors
    super();

    // here's our state
    this.state = {
      userLoggedIn: false
    }
  }




  render(){
    return (
      <div className="container">
        <Nav userLoggedIn={this.state.userLoggedIn}/>
        <CreateUser />
        <LoginUser />
        <SearchForm />
        <SearchOption />
        <DisplayResults />
        <Profile />
        <Footer />
      </div>
    )
  }
}

// mount our App at #container
ReactDOM.render(<App />, document.querySelector('#container'))










