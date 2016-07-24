import React from 'react';

export default function CreateUser(props) {

  const handleSubmit= event=>{
    event.preventDefault();

    const newUser = {
      display_name: event.target.elements.display_name.value,
      username: event.target.elements.username.value,
      password_digest: event.target.elements.password_digest.value,
      slack: event.target.elements.slack.value,
      invitation_token: event.target.elements.invitation_token.value
    }

    console.log(newUser);
    // fired the App's prop function
    //props.addTask(newTask);

    //clear the form

    //req.body with form info POST to /user/createuser

    event.target.reset();
  }

return (

    <div className="row container view">
      <section className="col-md-8 col-md-offset-2">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label type="text" >First Name</label>
            <input className="form-control" type="text" name="display_name" placeholder="Enter first name" required/>
          </div>
          <div className="form-group">
            <label type="text" >User Name</label>
            <input className="form-control" type="text" name="username" placeholder="Create user name" required/>
          </div>
          <div className="form-group">
            <label type="text" >Password</label>
            <input className="form-control" type="password" name="password_digest" placeholder="Create a password" required/>
          </div>
          <div className="form-group">
            <label type="text" >Slack Id</label>
            <input className="form-control" type="text" name="slack" placeholder="Enter your slackId" required/>
          </div>
          <div className="form-group">
            <label type="text" >Invitation Token</label>
            <input className="form-control" type="text" name="invitation_token" placeholder="Invitation Token" required/>
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </section>
    </div>
  )

}
