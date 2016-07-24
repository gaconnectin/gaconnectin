import React from 'react';
import SearchOption from './SearchOption.jsx'
import DisplayResult from './DisplayResult.jsx'

import ajaxAdaptor  from '../helpers/ajaxAdaptor.js';

const ajax = new ajaxAdaptor(fetch);



export default class SearchForm extends React.Component{

constructor() {

    super();

    this.state = {
      skills: ["one", "two", "three"],
      interests: ["one", "two", "three"],
      userChoice: "One",
      studentList: []
    } //end state
}//end constructor

componentDidMount(){
  //hit the db for the freshest list of skills
    ajax.getSkills().then( data=> {
      let freshSkills = [];
      for(let i = 0; i < data.length; i++){
        freshSkills.push(data[i]['attr_name'])
        this.state.skills = freshSkills;
      }

      this.setState({skills: this.state.skills});
     }
   )

  ajax.getInterests().then( data=> {
      let freshInterests = [];
      for(let i = 0; i < data.length; i++){
        freshInterests.push(data[i]['attr_name'])
        this.state.interests = freshInterests;
      }
      this.setState({interests: this.state.interests})
  })

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
    let self = this
    //return students with same interests using input box
    event.preventDefault()

    //return student with desired interest
    let selected = document.getElementById( "interest" );
    let studentInterest = (selected.options[ selected.selectedIndex ].value);
    let interest = "interest"
    let allStudents = []

    //currently this is just returning all Interests, it is not based on the input value
    ajax.getStudents(interest, studentInterest).then( students=> {
      console.log('promise returned in getStudentInterest ajax call')
      console.log(students)
      this.state.studentList = students
      this.setState({studentList: this.state.studentList})
      }
    )
  }//end getStudentWithInterest

render(){

    return (

        <div className="row text-center">
          <div>
          <hr />
            <h1>Welcome to Ga Connectin!</h1>
            <h3>Start your search now!</h3>
              <section className="home-block">
                  <form className="form-inline" onClick={this.getUsersChoice.bind(this)}>
                      <div className="form-group home-page">
                        <select className="form-control" name="choice" defaultValue="choose" id="choice">
                          <option value="choose" disabled>Please Select An Option</option>
                          <option name="skills" value="skills">Skill</option>
                          <option name="choice" value="interests">Interest</option>
                        </select>
                        <button className="btn btn-success">Search</button>
                      </div>
                  </form>
              </section>
              <hr />
            </div>
            <div>
              <SearchOption
              userSkill={this.state.skills}
              userInterest={this.state.interests}
              userChoice={this.state.userChoice}
              getStudentWithInterest={this.getStudentWithInterest.bind(this)}
              getStudentWithSkill={this.getStudentWithSkill.bind(this)}/>
            </div>
            <div>
                <DisplayResult showAllStudents={this.state.studentList}/>
          </div>
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </div>
      )
   }
}
