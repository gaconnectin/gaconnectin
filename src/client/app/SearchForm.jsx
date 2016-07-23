import React from 'react';
import SearchOption from './SearchOption.jsx'
import DisplayResult from './DisplayResult.jsx'

import ajaxAdaptor          from '../helpers/ajaxAdaptor.js';

const ajax = new ajaxAdaptor(fetch);



export default class SearchForm extends React.Component{

constructor() {

    super();

    this.state = {
      skills: ["one", "two", "three"],
      userChoice: "One"
    }
}//end constructor

componentDidMount(){

    ajax.getSkills().then( data=> {
      let newData = [];
      for(let i = 0; i < data.length; i++){
        newData.push(data[i]['attr_name'])
        this.state.skills = newData;
      }
      this.setState({skills: this.state.skills});
     }
   )
  }//end componentDidMount

getUsersChoice(event){
  //get initial selection from user to search interests or skills
    event.preventDefault()

    let selected = document.getElementById( "choice" );
    let userOption = (selected.options[ selected.selectedIndex ].value);


  //render the appropriate div from searchOption component
    this.state.userChoice = userOption;
    this.setState({userChoice: this.state.userChoice});

  }//end getUserChoice



  getStudentWithSkill(event){
    event.preventDefault()
    //return students with selected skill
    let selected = document.getElementById( "skill" );
    let studentSkill = (selected.options[ selected.selectedIndex ].value);
    console.log(studentSkill);

    //need function to return students that have the matching skill set
    ajax.getStudents("skills", studentSkill).then(data=>{

      console.log(data);
    }
    )
    //then pass this data to DisplayResults Component

  }//end getStudentWithSkill


  getStudentWithInterest(event){
    //return students with same interests using input box
    event.preventDefault()

    //this gets the value of the input is typed
    let typedInput = event.target.value;
    console.log(typedInput);

    //currently this is just returning all Interests, it is not based on the input value
    ajax.getInterests().then( data=> {
      console.log(data)
      }
    )
  }//end getStudentWithInterest


render(){

    return (

        <div className="row text-center">
          <hr />
            <h2>WELCOME to Ga ConnectIN! PLease search</h2>
          <form onClick={this.getUsersChoice.bind(this)}>
              <div>
                <select name="choice" defaultValue="choose" id="choice">
                  <option value="choose" disabled>Choose</option>
                  <option name="skills" value="skills">Skill</option>
                  <option name="choice" value="interests">Interest</option>
                </select>
              </div>
              <div>
                <button className="btn btn-success">Search</button>
              </div>
          </form>
            <hr />
              <SearchOption
              userSkill={this.state.skills}
              userChoice={this.state.userChoice}
              getStudentWithInterest={this.getStudentWithInterest.bind(this)}
              getStudentWithSkill={this.getStudentWithSkill.bind(this)}
              />
               <div>
         {/* <DisplayResult /> */}
        </div>
        </div>

      )
   }
}
