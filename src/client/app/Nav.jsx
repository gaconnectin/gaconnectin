import React from 'react';
import { Link } from 'react-router'

//<img className="logo" src="../fonts/reel.svg"/>

export default class Nav extends React.Component{

 constructor() {

    // we also need to wake up our ancestors
    super();

    // here's our state
    this.state = {
      userLoggedIn: false,
      attrState: [
        "CSS",
        "HTML",
        "Javascript"
      ]
    }
  }

  componentDidMount(){
    // go to the db and get the freshest tasks
    // ajax.getAttribute().then( data=>
    //   // when the data comes back, update the state
    //   this.setState({tasks: data.indexByKey('task_id') })
    // )
    this.setState({attrState:this.state.attrState})
  }

render(){
 if(this.state.userLoggedIn){

  return (

    <nav className="navbar navbar-default navbar-fixed-top">
         <div className="container">
           <div className="navbar-header">
             <a className="navbar-left">Logo</a>
             <Link to="/">gaConnectIn</Link>
            </div>
             <ul className="nav navbar-nav navbar-right">
               <li><Link to="/logout">Log Out</Link></li>
               <li><Link to="/user-profile">Profile</Link></li>
             </ul>
         </div>
         {this.props.children}
       </nav>

    )


 } else {

  return (

     <nav className="navbar navbar-default navbar-fixed-top">
       <div className="container">
         <div className="navbar-header">
           <a className="navbar-left">Logo</a>
           <Link to="/">gaConnectIn</Link>
          </div>
           <ul className="nav navbar-nav navbar-right">
             <li><Link to="/login">Login</Link></li>
             <li><Link to="/create-account">Create Account</Link></li>
           </ul>
       </div>
       {this.props.children}
     </nav>
    )
 }
}

}

