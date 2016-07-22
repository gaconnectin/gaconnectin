// import the libs we need
import React from 'react'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'


// create a React Component called _App_
export default class App extends React.Component{

constructor() {

    // we also need to wake up our ancestors
    super();

    // here's our state
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


 componentDidMount(){
    // go to the db and get the freshest tasks
    // ajax.getAttr().then( data=>
    //   // when the data comes back, update the state
    //   this.setState({skills: this.state.skills,
    //                 interests: this.state.interests })
    // )
  }





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













