import React from 'react';

const CreateUser = props=>

<div className="row">
  <form action="post">
    <p>CreateUser</p>
    <div className="form-group">
      <label type="text" >First Name</label>
      <input className="form-control" type="text" name="display_name" placeholder="Enter first name"/>
    </div>
    <div className="form-group">
      <label type="text" >User Name</label>
      <input className="form-control" type="text" name="username" placeholder="Create user name"/>
    </div>
    <div className="form-group">
      <label type="text" >Password</label>
      <input className="form-control" type="password" name="password_digest" placeholder="Create a password"/>
    </div>
    <div className="form-group">
      <label type="text" >Slack Id</label>
      <input className="form-control" type="text" name="slack" placeholder="Enter your slackId"/>
    </div>
    <div className="form-group">
      <label type="text" >Invitation Token</label>
      <input className="form-control" type="text" name="invitation_token" placeholder=""/>
    </div>
    <button className="btn btn-success">Submit</button>
  </form>
</div>

export default CreateUser;
