import React from 'react';

import ajaxAdaptor   from '../helpers/ajaxAdaptor.js';

const ajax = new ajaxAdaptor(fetch);

export default function LoginUser(props) {

  const handleSubmit= event=>{
    console.log("in handleSubmit!!");
    event.preventDefault();

    const loginInfo = {
      username: event.target.elements.username.value,
      password: event.target.elements.password.value
    }

    console.log(loginInfo);

    ajax.loginUser(loginInfo)
    .then(data=>{
      return data.json()
    }).then(data=>
      {console.log(data.token);
      console.log(data.username)
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', data.username)
      }
    )

    event.target.reset();
  }

  return (

    // POST to ROUTE req.body /user/login
    <div className="container view">
  <section className="col-md-8 col-md-offset-2">
    <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label type="text" >User Name</label>
          <input className="form-control" type="text" name="username" placeholder="Enter user name" required/>
        </div>
        <div className="form-group">
          <label type="text" >Password</label>
          <input className="form-control" type="password" name="password" placeholder="Enter a password" required/>
        </div>
      <button className="btn btn-success" type="submit">Login</button>
    </form>
  </section>
</div>


  )
}

