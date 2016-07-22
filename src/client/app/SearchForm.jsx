import React from 'react';




export default function SearchForm(props) {

  const handleDropDown= event=> {
    event.preventDefault();

    const userChoice = event.target.options[event.target.selectedIndex].text;
    console.log(userChoice);


//send name as GET ROUTE to /search/attr needs to return SearchOptions attr type (skill drop down or interest input value)
  }


return (

    <div className="row text-center">
      <hr />
      <h2>WELCOME to Ga ConnectIN! PLease search</h2>
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

