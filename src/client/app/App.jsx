// import the libs we need
import React            from 'react'
import ReactDOM         from 'react-dom'

import ajax             from '../helpers/ajaxAdapter.js'
import util             from '../helpers/util.js'
import SearchContainer  from './SearchContainer.jsx'
import Search           from './Search.jsx'



// create a React Component called _App_
export default class App extends React.Component{

  render(){
    return (
      <div id="container">
        <SearchContainer />
      </div>
    )
  }
}

// mount our App at #container
ReactDOM.render(<App />, document.querySelector('#container'))