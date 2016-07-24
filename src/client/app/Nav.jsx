import React from 'react';
import { Link } from 'react-router';
require('../fonts/logo.svg');


export default function Nav(props){


 if(props.userLoggedIn){

  return (

    <nav className="navbar navbar-default navbar-fixed-top">
         <div className="container">
           <div className="navbar-header">
             <ul className="nav navbar-nav">
            <li><Link to="/" className=""><span className="logo"></span></Link></li>
          </ul>
            </div>
             <ul className="nav navbar-nav navbar-right">
               <li><Link to="/logout" activeStyle={{ color: 'red' }}>Log Out</Link></li>
               <li><Link to="/user-profile" activeStyle={{ color: 'red' }}>Profile</Link></li>
             </ul>
         </div>

       </nav>

    )


 } else {

  return (

     <nav className="navbar navbar-default navbar-fixed-top">
       <div className="container">
         <div className="navbar-header">
          <ul className="nav navbar-nav">
            <li><Link to="/" className=""><span className="logo"></span></Link></li>
          </ul>
          </div>
           <ul className="nav navbar-nav navbar-right">
              <li><Link to="/login" activeStyle={{ color: 'red' }}>Login</Link></li>
              <li><Link to="/create-account" activeStyle={{ color: 'red' }}>Create Account</Link></li>
           </ul>
       </div>

     </nav>
    )

}

}

