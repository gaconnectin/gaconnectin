import React from 'react';
import { Link } from 'react-router'



const DisplayResult = props=>

  <div className="container">
    <hr/>
    <ul>

      {props.showAllStudents.map(function(student, index){
         return (
          <li key={index}>
          <p>{student.display_name}</p>
          <img src="https://dizivizi.com/mbb/imgs/site/default_user.png"/>
          <p><Link to='/profile/user/${student.user_id}'>Visit Profile</Link></p>
          </li>
          )
      }
      )}

    </ul>

  </div>


export default DisplayResult;
