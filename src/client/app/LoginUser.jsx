import React from 'react';

const LoginUser = props=>
<div>
  <form action="post">
    <p>LoginUser</p>
    <div className="form-group">
      <label type="text" >User Name</label>
      <input className="form-control" type="text" name="username" placeholder="Enter user name"/>
    </div>
    <div className="form-group">
      <label type="text" >Password</label>
      <input className="form-control" type="password" name="password_digest" placeholder="Enter a password"/>
    </div>
  </form>
</div>
export default LoginUser;
