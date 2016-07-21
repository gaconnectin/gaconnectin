import React from 'react';

const SearchForm = props=>
<div className="row text-center">
  <h2>choose what category you want to find</h2>
  <div>
    <select className="">
      <option name="skill" value="">Skill</option>
      <option name="interest" value="">Interest</option>
    </select>
  </div>
  <div>
    <button className="btn btn-success">Search</button>
  </div>
</div>

export default SearchForm;
