import React from 'react';

const Person = ({
name,
img,
getProfile
}) => (
  <li>
    onClick={()=> getProfile(id)}>
    {person.name}
  </li>
)

const DisplayResult = props=>

  <div className="container">
    <hr/>
    <ul>
      <li>
        <img src="https://dizivizi.com/mbb/imgs/site/default_user.png"/>
        <a>Name 1 goes here</a>
      </li>
    </ul>

  </div>


export default DisplayResult;
