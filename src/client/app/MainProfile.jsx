import React          from 'react';
import Profile        from './Profile.jsx';
import ajaxAdaptor    from '../helpers/ajaxAdaptor.js';


const ajax = new ajaxAdaptor(fetch);
export default class  MainProfile extends React.Component {
  constructor() {
    super();
    this.state = {
        slack: [],
        displayName:[],
        username: [],
        interestName:[],
        skillName:[],
        editProfile: false
    }
  }//end constructor
  componentDidMount(event) {
    // let string = [];
    ajax.getUserAttributes()
        .then(data=> {
          let newSkills= [];
          let newInterests= [];
          console.log(data)
            this.setState({displayName:data.user.display_name});
            this.setState({username:data.user.username});
            this.setState({slack:data.user.slack})

          for (var i = 0; i < data.attributes.length; i++) {
              if (data.attributes[i].attr_type === "skills") {
                newSkills.push(data.attributes[i].attr_name)
              }
              else if (data.attributes[i].attr_type === "interest") {
                newInterests.push(data.attributes[i].attr_name)
              }
          }
                this.state.skillName = newSkills
                this.setState({skillName:this.state.skillName})

                this.state.interestName = newInterests
                this.setState({interestName:this.state.interestName})

        })
    } //end of componentDidMount()
        toggleEdit(event){
          event.preventDefault
          console.log("toggleEdit btn CLICKED !!");
          this.state.editProfile = !this.state.editProfile
          this.setState({editProfile:this.state.editProfile})
        }

    updateUserName(event){
      event.preventDefault()
      console.log(event.target.name.value)
      ajax.updateUser({ display_name: event.target.name.value})
        .then(data=> {})
      }

    updateUserSlack(event){
      event.preventDefault()
      console.log(event.target.slack.value)
      ajax.updateUser({slack:event.target.name.value})
        .then(data=> {})
    }



  render(){
    if (this.state.editProfile === false) {
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
                              {this.state.skillName.map(function(skillData, index) {
                                 return (
                                        <li key={index}>{skillData}</li>
                                  )
                              })
                              } {/*end of .map function*/}
                          </ul>
                          <h3>Interests</h3>
                          <ul className="interestsPrint">
                               {this.state.interestName.map(function(interestData,index) {
                                return (
                                        <li key={index}>{interestData}</li>
                                  )
                              })
                              } {/*end of .map function*/}
                          </ul>
                        <label htmlFor="slack-user-name" className="col-sm-2 control-label">Slack: {this.state.slack}</label>
                      </div>
                     </div>
                    </form>
                            <button onClick={this.toggleEdit.bind(this)} className="btn btn-default "> EDIT PROFILE</button>
              </div>
          </div>
        </div>
    )
       } else {
         return (
            <Profile
              toggleProfile={this.toggleEdit.bind(this)}
              updateUserSlack={this.updateUserSlack.bind(this)}
              updateUserName={this.updateUserName.bind(this)} />

          )
       }
  } //end of render()
}
