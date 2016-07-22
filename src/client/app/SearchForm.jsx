import React from 'react';
import SearchOption from './SearchOption.jsx'

import ajaxAdaptor          from '../helpers/ajaxAdaptor.js';

const ajax = new ajaxAdaptor(fetch);






export default class SearchForm extends React.Component{

constructor() {

    super();

    this.state = {
      skills: ["one", "two", "three"],
      userChoice: 'skills'
    }
}
componentDidMount(){

  console.log('ComponentDidMount')
    ajax.getSkills().then( data=> {
      let newData = [];
       console.log(data[0]['attr_name'], 'insidePromise')
      for(let i = 0; i < data.length; i++){
        newData.push(data[i]['attr_name'])
        this.state.skills = newData;
      }
      this.setState({skills: this.state.skills})
    }
    )

  }

handleUserOption(event){
    event.preventDefault();
    // this is the drop down input
    // console.log(event.target.options[event.target.selectedIndex].text);
    //this is the text input
    console.log('clicked');

  }


handleDropDown(event){

    event.preventDefault();

    let selected = document.getElementById( "choice" );

    let userChoice = selected.options[ selected.selectedIndex ].value;
    console.log(userChoice)
    this.state.userChoice = userChoice

    this.setState({userChoice: this.state.userChoice})

  }


render(){



    return (

        <div className="row text-center">
          <hr />
          <h2>WELCOME to Ga ConnectIN! PLease search</h2>
          <form onSubmit={this.handleDropDown}>
          <div>
            <select name="choice" id="choice">
              <option name="skills" value="skills">Skill</option>
              <option name="choice" value="interest">Interest</option>
            </select>
          </div>
          <div>
            <button className="btn btn-success">Search</button>
          </div>
          </form>
          <hr />
          <SearchOption userSkill={this.state.skills} userChoice={this.state.userChoice}/>
        </div>
      )

  }
}
