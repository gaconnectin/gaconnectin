import React          from 'react';
// import ProfileList    from './ProfileList.jsx';
// import SkillList      from './SkillList.jsx';
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


