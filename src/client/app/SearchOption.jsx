import React from 'react';
var ReactDatalist = require('react-datalist')



export default function SearchOption(props){

  if(props.userChoice === 'skills'){
    //show this div if user wants to see skills
    return(
          <div className="row text-center">
            <div>
              <h2>I want to find someone who can help me with:</h2>
              <form className="form-inline">
                 <div className="form-group">
                 <select className="form-control" id="skill">
                  {/*Return results from the db, population the options*/}
                    {props.userSkill.map(function(item, index){
                      return <option key={index}>{item}</option>
                    })}
                 </select>
                <button onClick={props.getStudentWithSkill} className="btn btn-success" type="submit">FIND!</button>
                </div>
              </form>
            </div>
            <hr />
          </div>
    )

  } else if (props.userChoice === 'interests') {
    //show this div is user chose interest:
    return (
        <div className="row text-center">
                <div>
                  <h2>I want to find someone who likes:</h2>
                   <form className="form-inline">
                 <div className="form-group">
                 <select className="form-control" id="skill">
                  {/*Return results from the db, population the options*/}
                    {props.userInterest.map(function(item, index){
                      return <option key={index}>{item}</option>
                    })}
                 </select>
                <button onClick={props.getStudentWithInterest} className="btn btn-success" type="submit">FIND!</button>
                </div>
              </form>
                </div>
                <hr />
              </div>
      )

  } else {
    //IF there are no options, do not render anything until user makes a selection
    return(

          <div></div>
      )
  }

}
