import React from 'react';
import ProfileList from './ProfileList.jsx';

export default function Profile(props) {

  return (
        <div>
          <hr/>
          <h1 className="text-center">User Profile</h1>
            <div className="row">
              <div className="col-sm-3">
                <img src="https://dizivizi.com/mbb/imgs/site/default_user.png"/>
              </div>
              <div className="col-sm-9">
                    <form className="form-horizontal">
                      <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-2 control-label">Name</label>
                        <div className="col-sm-10">
                          <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputPassword3" className="col-sm-2 control-label">SlackId</label>
                        <div className="col-sm-10">
                          <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
                        </div>
                      </div>
                       <div className="form-group">
                        <label htmlFor="inputPassword3" className="col-sm-2 control-label">Skills</label>
                        <div className="col-sm-10">
                          <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
                        </div>
                      </div>
                       <div className="form-group">
                        <label htmlFor="inputPassword3" className="col-sm-2 control-label">Interest</label>
                        <div className="col-sm-10">
                          <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
                        </div>
                      </div>
                    </form>
                    <div className="row">
                      <div className="sm-col-6">
                      </div>
                      <div className="sm-col-6">
                      </div>
                    </div>
              </div>
               <ProfileList />
          </div>
        </div>
    )


}


