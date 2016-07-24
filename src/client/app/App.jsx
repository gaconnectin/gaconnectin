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
    this.state = {
      userLoggedIn: false,
    }
  }

  changeLogInStatus(event){
    event.preventDefault()
    console.log('click')
  }

  render(){

    return (

      <container>
        <header>
          <Nav userStatus={this.state.userLoggedIn} changeStatus={this.changeLogInStatus.bind(this)}/>
        </header>
          <div className="container">
            {this.props.children}
          </div>
            <Footer />
      </container>


    )
  }
}













