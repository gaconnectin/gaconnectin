import React          from 'react';
import ProfileList    from './Profile.jsx';
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
        skillName:[]
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
            console.log(data)
          for (var i = 0; i < data.attributes.length; i++) {
              if (data.attributes[i].attr_type === "skills") {
                newSkills.push(data.attributes[i].attr_name)
                console.log(data.attributes[i].attr_name, "Inside if conditional == skills")
              }
              else if (data.attributes[i].attr_type === "interest") {
                newInterests.push(data.attributes[i].attr_name)
                console.log(data.attributes[i].attr_name, "Inside if conditional == interest")
              }
          }
                this.state.skillName = newSkills
                this.setState({skillName:this.state.skillName})
                console.log(newSkills, "new skills outside loop")
                console.log(newInterests, "new interest outside loop")
                this.state.interestName = newInterests
                this.setState({interestName:this.state.interestName})
                console.log(this.state.skillName, "this is skillName array")
                console.log(this.state.interestName, "this is interestName array")
        })
    } //end of componentDidMount()
  render(){
    return (
        <div className="container">
          <hr/>
          <h1 className="text-center header-name">{this.state.displayName}'s Profile</h1>
          <hr />
            <div className="row">
              <div className="col-sm-3">
                <img src="https://dizivizi.com/mbb/imgs/site/default_user.png"/>
              </div>
                    <div className="col-sm-9 text-left">
                        <h3>User Name: <span className="highlight">{this.state.username}</span></h3>
                        <h3>Slack Id: <span className="highlight">{this.state.slack}</span></h3>
                        <h3>Skills</h3>
                              <ul className="skillsPrint">
                                  {this.state.skillName.map(function(skillData, index) {
                                     return (
                                            <li className="highlight" key={index}>{skillData}</li>
                                      )
                                  })
                                  } {/*end of .map function*/}
                              </ul>
                        <h3>Interests</h3>
                          <ul className="interestsPrint">
                               {this.state.interestName.map(function(interestData,index) {
                                return (
                                        <li className="highlight" key={index}>{interestData}</li>
                                  )
                              })
                              } {/*end of .map function*/}
                          </ul>
                      </div>
                      </div>
                    <div className="row text-center">
                      <hr />
                      <button className="btn btn-default btn-success">EDIT PROFILE</button>
                      <hr />
                    </div>
         </div>//end container

    )
  } //end of render()
}
