import React from 'react';
import SearchOption from './SearchOption.jsx'

import ajaxAdaptor          from '../helpers/ajaxAdaptor.js';

const ajax = new ajaxAdaptor(fetch);






export default class SearchForm extends React.Component{

constructor() {

    super();

    this.state = {
      skills: ["one", "two", "three"]
    }
}
componentDidMount(){


    ajax.getSkills().then( data=>
      // when the data comes back, update the state
      //this.setState({skills: this.state.skills})
      console.log(data)
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
    console.log('user choices', userChoice);

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
          <SearchOption userChoice={this.state.skills}/>
        </div>
      )

  }
}


