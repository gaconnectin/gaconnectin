import React       from 'react';

export default function Profile(props) {

  return (
        <div className="container">
          <hr/>
          <h1 className="text-center highlight">Edit Profile</h1>
          <hr />
            <div className="row">
              <div className="col-sm-3">
                <img src="https://dizivizi.com/mbb/imgs/site/default_user.png"/>
              </div>
              <div className="col-sm-9">
                  <form onSubmit={props.updateUserName} className="form-inline">
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Name</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" name="name" placeholder="Display name"/>
                          <button className="btn btn-default">Save</button>
                      </div>
                     </div>
                    </form>

                    <form onSubmit={props.updateUserSlack} className="form-inline">
                      <div className="form-group">
                        <label className="col-sm-2 control-label">SlackId</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" name="slack" placeholder="Please enter your slackId"/>
                            <button className="btn btn-default">Save</button>
                        </div>
                      </div>
                    </form>



                      <form className="form-inline" action="post">
                         <div className="form-group">
                          <label>Choose</label>
                            <select name="" id="">
                              <option value="skills">Skills</option>
                              <option value="interest">Interest</option>
                            </select>
                          </div>
                         <div className="form-group">
                            <input type="text" className="form-control" placeholder="Update here"/>
                          </div>
                        <button type="submit" className="btn btn-default">Save</button>
                      </form>
              </div>
          </div>
          <div className="text-center">
              <button type="submit" className="btn btn-success" onClick={props.toggleProfile} >Done!</button>
              </div>
        </div>
    )


}


