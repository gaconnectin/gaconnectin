// import the libs we need
import React            from 'react';
import ReactDOM         from 'react-dom';

import ajax             from '../helpers/ajaxAdaptor.js';
import util             from '../helpers/util.js';
import Footer           from './Footer.jsx';
import Nav              from './Nav.jsx';

// create a React Component called _App_
export default class App extends React.Component{

  render(){
    return (
      <div id="container">
        <Nav />
        <Footer />
      </div>
    )
  }
}

// mount our App at #container
ReactDOM.render(<App />, document.querySelector('#container'))
