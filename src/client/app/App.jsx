// import the libs we need
import React            from 'react'
import Nav              from './Nav.jsx'
import Footer           from './Footer.jsx'

import ajax             from '../helpers/ajaxAdaptor.js';
import util             from '../helpers/util.js';


// create a React Component called _App_
export default class App extends React.Component{

 constructor() {

    // we also need to wake up our ancestors
    super();

    // here's our state
    if (localStorage.token) {
      this.state = {
        userLoggedIn: true
      }
    } else {
      this.state = {
        userLoggedIn: false
      }
    }
}

  render(){
    return (

      <container>
        <header>
          <Nav loggedIn={this.state.userLoggedIn} />
        </header>
          <div className="container">
            {this.props.children}
          </div>
            <Footer />
      </container>


    )
  }
}










