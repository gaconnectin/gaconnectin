import React from 'react';
import { Link } from 'react-router'

//<img className="logo" src="../fonts/reel.svg"/>

export default function Nav(props){


 if(props.userLoggedIn){

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

     </nav>
    )

}

}

