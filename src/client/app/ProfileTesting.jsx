import React from "react";
import { Link } from "react-router";

export default class ProfileTesting extends React.Component {
  navigate(){
    this.props.history.pushState(null, "/");
  }
render(){
  const { params} = this.props;
  const { query } = this.props.location;
  const { date, filter } = query;
  console.log(this.props)

  return (
    <div>
    <h1>{params.userID}</h1>
    {this.props.children}
      <Link className="btn btn-success" to={`{user/{7}`}>HeidiTest</Link>
      <button onClick={this.navigate.bind(this)}>Log Out</button>
       <h4> date: {date}, filter: {filter}</h4>
      </div>

     );
  }
}
