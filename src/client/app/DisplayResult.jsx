import React from 'react';


const DisplayResult = props=>

  <div className="container">
    <hr/>
    <ul>

      {props.showAllStudents.map(function(student, index){
         return (
          <li key={index}>
          <p>{student.display_name}</p>
          <img src="https://dizivizi.com/mbb/imgs/site/default_user.png"/>
          </li>
          )
      }
      )}

    </ul>

  </div>


export default DisplayResult;
