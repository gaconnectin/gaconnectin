import React from 'react';

const LoginUser = props=>

// POST to ROUTE req.body /user/login
<div className="container">
  <form action="post">
    <p>LoginUser</p>
    <div className="form-group">
      <label type="text" >User Name</label>
      <input className="form-control" type="text" name="username" placeholder="Enter user name" required/>
    </div>
    <div className="form-group">
      <label type="text" >Password</label>
      <input className="form-control" type="password" name="password_digest" placeholder="Enter a password" required/>
    </div>
    <button className="btn btn-default" type="submit">Login</button>
  </form>
</div>
export default LoginUser;
