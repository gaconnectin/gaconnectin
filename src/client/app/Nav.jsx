import React from 'react';
//<img className="logo" src="../fonts/reel.svg"/>

 export default function Nav(props) {
  console.log(props.userLoggedIn)
 if(props.userLoggedIn){

  return (

    <nav className="navbar navbar-default navbar-fixed-top">
         <div className="container">
           <div className="navbar-header">
             <a className="navbar-left">Logo</a>
             <a className="navbar-brand">gaConnectIn<span className="logo"></span></a>
            </div>
             <ul className="nav navbar-nav navbar-right">
               <li><a href="../" className="">Logout<span className="logo"></span></a></li>
                <li> <a href="../" className="">Profile<span className="logo"></span></a></li>
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
           <a className="navbar-brand">gaConnectIn<span className="logo"></span></a>
          </div>
           <ul className="nav navbar-nav navbar-right">
             <li><a href="../" className="">Login<span className="logo"></span></a></li>
              <li> <a href="../" className="">Create Account<span className="logo"></span></a></li>
           </ul>
       </div>
     </nav>
    )
 }

}

