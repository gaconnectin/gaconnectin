import React       from 'react';
import ProfileList from './ProfileList.jsx';
import SkillList   from './SkillList.jsx';

import ajaxAdaptor          from '../helpers/ajaxAdaptor.js';

const ajax = new ajaxAdaptor(fetch);


export default class MainProfile extends React.Component {

  constructor() {

    super();

    this.state = {
      userData: {
        slack: [],
        displayName:[],
        username: [],
        interestName:[],
        skillName:[],

      }
    }
  }//end constructor

  componentDidMount(event) {
    let string = []
    ajax.getUserAttributes()
        .then(data=> {
          let newUserData = []

          console.log(data)
          console.log(data.attributes[0].attr_type)
            this.setState({displayName:data.user.display_name});
            this.setState({username:data.user.username});
            this.setState({slack:data.user.slack})

              this.setState({skillName:data.attributes[3].attr_name})
              this.setState({interestName:data.attributes[0].attr_name})
        })
    } //end of componentDidMount()


  render(){

    return (
        <div className="container">
          <hr/>
          <h1 className="text-center">{this.state.displayName}</h1>
          {/*<h3 userData={this.state.userData}></h3>*/}

          <h3>User Name: {this.state.username}</h3>
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
                              <li>{this.state.skillName}</li>
                          </ul>
                          {/*<br/>*/}
                          <h3>Interests</h3>
                          <ul className="interestsPrint">
                              <li>{this.state.interestName} </li>
                          </ul>
                        <label htmlFor="slack-user-name" className="col-sm-2 control-label">Slack: {this.state.slack}</label>
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


              </div>
          </div>
        </div>
    )


  } //end of render()

}


