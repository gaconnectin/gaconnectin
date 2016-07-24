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
      userChoice: "One",
      studentList: []
    } //end state
}//end constructor

componentDidMount(){
  //hit the db for the freshest list of skills
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
    this.setState({userChoice: userOption});

  }//end getUserChoice



  getStudentWithSkill(event){
    let self = this
    event.preventDefault()
    //return students with selected skill
    let selected = document.getElementById( "skill" );
    let studentSkill = (selected.options[ selected.selectedIndex ].value);
    let skills = "skills"
    let allStudents = []
    //need function to return students that have the matching skill set
    ajax.getStudents(skills, studentSkill).then( students=> {
      //returns array of students with the chosen skill
       this.state.studentList = students
       this.setState({studentList: this.state.studentList})
    }).catch(error=> {throw error})//end catch
    //then pass this data to DisplayResults Component

    console.log(this.state.studentList)

  }//end getStudentWithSkill


  getStudentWithInterest(event){
    //return students with same interests using input box
    event.preventDefault()

    //this gets the value of the input is typed
    let studentInterest = event.target.value;
    console.log(studentInterest);
    let interest = "interest"
    let allStudents = []
    //currently this is just returning all Interests, it is not based on the input value
    ajax.getStudents(interest, studentInterest).then( students=> {
      console.log('promise returned in getStudentInterest ajax call')
      console.log(students)
      this.state.studentList = student
      this.setState({studentList: this.state.studentList})
      }
    )
  }//end getStudentWithInterest


render(){

    return (

        <div className="row text-center">
          <hr />
            <h2>WELCOME to Ga ConnectIN! PLease searc</h2>
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
         <DisplayResult showAllStudents={this.state.studentList} />
        </div>
        </div>

      )
   }
}
