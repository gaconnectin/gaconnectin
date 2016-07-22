import React from 'react';

export default function SearchOption(props) {

export default function SearchOption(props) {

  const handleUserOption=event=>{
    event.preventDefault();
    // this is the drop down input
    // console.log(event.target.options[event.target.selectedIndex].text);
    //this is the text input
    console.log(event.target.value);
    //attr_name =
  }

 return (

      <div className="row text-center">
        <div>
          <form onChange={handleUserOption}>
          <h2>I want to find someone who knows</h2>
             <select name="skill" id="">
               {props.attr.map((attr,index)=>
                  <option key={index}></option>
                )}

             </select>
             <h2>I want to find someone who likes</h2>
            <input name="interest" type="text" placeholder="enter an interest here" required/>
          </form>
        </div>
        <hr />
      </div>

 )

}






//jsx show if/skill or value
