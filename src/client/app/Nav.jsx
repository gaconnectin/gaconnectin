import React from 'react';
//<img className="logo" src="../fonts/reel.svg"/>

 export default function Nav(props) {

const handleClick=event=>{
  const page = event.target.dataset.page
  console.log(page)

}


 if(props.userLoggedIn){

  return (

    <nav className="navbar navbar-default navbar-fixed-top">
         <div className="container">
           <div className="navbar-header">
             <a className="navbar-left">Logo</a>
             <a className="navbar-brand">gaConnectIn</a>
            </div>
             <ul className="nav navbar-nav navbar-right">
               <li><a >Log Out</a></li>
                <li> <a>Profile</a></li>
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
             <li><a onClick={handleClick} data-page="login">Login</a></li>
              <li> <a onClick={handleClick} data-page="create">Create Account</a></li>
           </ul>
       </div>
     </nav>
    )
 }

}

