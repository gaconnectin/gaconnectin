import React from 'react';
import SearchOption from './SearchOption.jsx'

import AjaxAdaptor          from '../helpers/ajaxAdaptor.js';

// const ajax = new AjaxAdaptor(fetch);






export default class SearchForm extends React.Component{



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
