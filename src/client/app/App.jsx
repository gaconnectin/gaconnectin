// import the libs we need
import React from 'react'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'

import ajax             from '../helpers/ajaxAdaptor.js';
import util             from '../helpers/util.js';


// create a React Component called _App_
export default class App extends React.Component{


  render(){
    return (

      <container>
        <header>
          <Nav />
        </header>
          <div className="container">
            {this.props.children}
          </div>
            <Footer />
      </container>


    )
  }
}













