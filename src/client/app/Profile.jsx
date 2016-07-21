import React       from 'react';
import ProfileList from './ProfileList.jsx';
import SkillList   from './SkillList.jsx';

export default function Profile(props) {

  return (
        <div>
          <hr/>
          <h1 className="text-center">Edit Profile</h1>
            <div className="row">
              <div className="col-sm-3">
                <img src="https://dizivizi.com/mbb/imgs/site/default_user.png"/>
              </div>
              <div className="col-sm-9">
                  <form className="form-inline">
                    <div className="form-group">
                      <label htmlFor="inputEmail3" className="col-sm-2 control-label">Name</label>
                      <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Display name"/>
                          <button className="btn btn-default">Save</button>
                      </div>
                     </div>
                    </form>

                    <form action="post" className="form-inline">
                      <div className="form-group">
                        <label htmlFor="inputPassword3" className="col-sm-2 control-label">SlackId</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="inputPassword3" placeholder="Please enter your slackId"/>
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
                            <input type="text" className="form-control" id="inputPassword3" placeholder="Update here"/>
                          </div>
                        <button type="submit" className="btn btn-default">Save</button>
                      </form>


                    <div className="row">
                      <div className="col-sm-6">
                      <ProfileList />
                      </div>
                      <div className="col-sm-6">
                      <SkillList />
                      </div>
                    </div>
              </div>
          </div>
        </div>
    )


}


