import React from 'react';


export default function SearchOption(props){
  console.log(props.userChoice)
  if(props.userChoice == 'skills'){
    return(

          <div className="row text-center">
            <div>
              <form>

              <h2>I want to find someone who likes</h2>
                 <select>
                    {props.userSkill.map(function(item, index){
                      return <option key={index}>{item}</option>
                    })}

                 </select>

                <button className="btn btn-default" type="submit">FIND!</button>
              </form>
            </div>
            <hr />
          </div>
    )

  } else {

    return (
        <div className="row text-center">
                <div>
                  <form>

                  <h2>ATTR</h2>


                    <input name="interest" type="text" placeholder="enter an interest here"/>
                    <button className="btn btn-default" type="submit">FIND!</button>
                  </form>
                </div>
                <hr />
              </div>


      )



  }




}






//   React.Children.map(props.children, child=>
                  // React.cloneElement(child, {
                  //   onClick: clickDelete(key)
                  // }))

//jsx show if/skill or value
