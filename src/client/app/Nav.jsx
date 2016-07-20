import React from 'react';
//<img className="logo" src="../fonts/reel.svg"/>

 const Nav = props=>(
   <nav className="navbar navbar-default navbar-fixed-top">
     <div className="container">
       <div className="navbar-header">
         <a href="#" className="navbar-left">Logo</a>
         <a href="../" className="navbar-brand">gaConnectIn<span className="logo"></span></a>
         <a href="../" className="">Login<span className="logo"></span></a>
       </div>
     </div>
   </nav>
 )
 export default Nav;
