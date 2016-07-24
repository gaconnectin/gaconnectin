import React from 'react';
import Profile from './Profile.jsx'

import ajaxAdaptor          from '../helpers/ajaxAdaptor.js';

const ajax = new ajaxAdaptor(fetch);





export default class ProfileList extends React.Component {

  constructor() {

    super();

    this.state = {
      userData: {
        slack: [],
        displayName:[],
        username: [],
        interestName:[],
        skillName:[],
        user_id: 0,
        editProfile:  false

      }
    }
  }//end constructor


  componentDidMount() {

    ajax.getHeidiUser()
        .then(data=> {
          console.log(data)
            this.setState({displayName:data.user.display_name});
            this.setState({username:data.user.username});
            this.setState({slack:data.user.slack})
            this.setState({skillName:data.attributes[3].attr_name})
            this.setState({interestName:data.attributes[0].attr_name})
            this.setState({user_id: data.user.user_id})

        })

    } //end of componentDidMount()

  updateUserName(event){
    event.preventDefault()
    console.log(event.target.name.value)
    ajax.getUserAttributes()
        .then(data=> {})
  }

  updateUserSlack(event){
    event.preventDefault()
    console.log(event.target.slack.value)
    ajax.getUserAttributes()
        .then(data=> {})
  }


  render(){

    const userProfileId = this.props.params.userId;
    console.log(userProfileId, "in render")
    if(this.state.editProfile===false){

      return(

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
                                    <label className="col-sm-2 control-label">Slack: {this.state.slack}</label>
                                  </div>
                                 </div>
                                </form>

                                <form action="user-profile" className="form-inline">
                                  <div className="form-group">
                                    <div className="col-sm-10">
                                        <button className="btn btn-default"> EDIT PROFILE</button>
                                    </div>
                                  </div>

                                </form>
                          </div>
                          <pre>{JSON.stringify(this.state, null, 2)}</pre>

                      </div>
                    </div>
                )

        )

    }







  } //end of render()

}


