import React from 'react';

const LoginUser = props=>

// POST to ROUTE req.body /user/login
<div className="container view">
  <section className="col-md-8 col-md-offset-2">
    <form action="post">
        <div className="form-group">
          <label type="text" >User Name</label>
          <input className="form-control" type="text" name="username" placeholder="Enter user name" required/>
        </div>
        <div className="form-group">
          <label type="text" >Password</label>
          <input className="form-control" type="password" name="password_digest" placeholder="Enter a password" required/>
        </div>
      <button className="btn btn-success" type="submit">Login</button>
    </form>
  </section>
</div>
export default LoginUser;
