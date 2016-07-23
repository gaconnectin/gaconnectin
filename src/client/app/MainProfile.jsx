import React       from 'react';
import ProfileList from './ProfileList.jsx';
import SkillList   from './SkillList.jsx';

import ajaxAdaptor          from '../helpers/ajaxAdaptor.js';

const ajax = new ajaxAdaptor(fetch);


export default class  MainProfile extends React.Component {

  constructor() {

    super();

    this.state = {
      userData: ["one", "two"]

    }
  }//end constructor

  componentDidMount() {
    ajax.getUserAttributes()
        .then(data=> {
          let newUserData= [];
          for (var i = 0; i < data.length; i++) {
            newUserData.push(data[i][user])
            this.state.userAttr = newUserData
          }
          console.log(newUserData)
          console.log(data.user.username)
          console.log(data)

          this.setState({userData: this.state.userData});
        })
          console.log(this.state.userData)
    } //end of componentDidMount()


  render(){

    return (
        <div className="container">
          <hr/>
          <h1 className="text-center">Persons name</h1>
          <h3>{this.props.userData}</h3>
          {/*<h3>{this.props.userData.user.slack}</h3>*/}
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
                        <label htmlFor="inputPassword3" className="col-sm-2 control-label">user slackname</label>


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


