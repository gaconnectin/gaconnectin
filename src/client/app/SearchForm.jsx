import React from 'react';




export default function SearchForm(props) {

  const handleDropDown= event=> {
    event.preventDefault();
    console.log(event.target.options[event.target.selectedIndex].text)


//send name as GET ROUTE to /search/attr needs to return SearchOptions attr type (skill drop down or interest input value)
  }


return (

    <div className="row text-center">
      <hr />
      <h2>choose what category you want to find</h2>
      <form onChange={handleDropDown}>
      <div>
        <select className="">
          <option name="skill" value="">Skill</option>
          <option name="interest" value="">Interest</option>
        </select>
      </div>
      <div>
        <button className="btn btn-success">Search</button>
      </div>
      </form>
      <hr />
    </div>
  )
};

