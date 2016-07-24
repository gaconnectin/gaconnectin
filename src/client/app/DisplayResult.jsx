import React from 'react';
import { Link } from 'react-router'




export default class DisplayResults extends React.Component{
render(){
  return(

        <div className="container">
          <ul>
            {this.props.showAllStudents.map(function(student, index){
               return (
                <li key={index}>
                  <h3>{student.display_name}</h3>
                  <img src="https://dizivizi.com/mbb/imgs/site/default_user.png"/>
                    <section className="profile-link">
                      <form action={`profile/user/${student.user_id}`} method="get">
                      {/*<Link className="btn btn-success" to={`heiditest/user/${student.user_id}`}>Visit Profile</Link>*/}
                      <button type="submit" className="btn btn-success">Visit Profile</button>
                      </form>
                    </section>
                    <hr />
                </li>
                )}
            )}
          </ul>
        </div>

    )

}

}//end displayresults
<<<<<<< HEAD
=======


>>>>>>> e0a7fddc186d1b0ce310e1e691da30eed39b82a4
