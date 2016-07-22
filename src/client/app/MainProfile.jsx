import React       from 'react';
import ProfileList from './ProfileList.jsx';
import SkillList   from './SkillList.jsx';


export default function MainProfile(props) {

  return (
        <div className="container">
          <hr/>
          <h1 className="text-center">Persons name</h1>
            <div className="row">
              <div className="col-sm-3">
                <img src="https://dizivizi.com/mbb/imgs/site/default_user.png"/>
              </div>
              <div className="col-sm-9">
                  <form className="form-inline">
                    <div className="form-group">
                      <div className="col-sm-10">
                        <h3>Skills</h3>
                          <ul className="skillsPrint">
                              <li>users skills </li>
                              <li>users skills </li>
                              <li>users skills </li>
                          </ul>
                          {/*<br/>*/}
                          <h3>Interests</h3>
                          <ul className="interestsPrint">
                              <li>users Interests </li>
                              <li>users Interests </li>
                              <li>users Interests </li>
                          </ul>
                        <label htmlFor="inputPassword3" className="col-sm-2 control-label">SlackId</label>

                      </div>
                     </div>
                    </form>

                    <form action="user-profile" className="form-inline">
                      <div className="form-group">
                        <div className="col-sm-10">
                            <button className="btn btn-default goTOEditUSerProf"> EDIT PROFILE</button>
                        </div>
                      </div>
                    </form>






                   {/*} <div className="row">
                      <div className="col-sm-6">
                      <ProfileList />
                      </div>
                      <div className="col-sm-6">
                      <SkillList />
                      </div>
                    </div> */}

              </div>
          </div>
        </div>
    )


}


