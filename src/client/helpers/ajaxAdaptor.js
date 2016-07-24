export default class AjaxAdaptor {

  constructor(fetch){
    if(!fetch) throw "HELP";
  }

  getSkills() {
    //console.log("hit getSkills AjaxAdapter")
     return fetch('/search/skills')
    .then(r => r.json())
    }

  getInterests() {
    console.log('hit getInterest AjaxAdapter')
    return fetch('/search/interests')
    .then(r => r.json())
  }
  // Getting user attributes by ":uID"
  getUserAttributes() {
    return fetch('/user/3')
    .then(r=> r.json())
    console.log(r)
  }
  getUser() {
    return fetch('user/2')
    .then(r=> r.json())
    console.log(r)
  }

  getStudents(attrType, attrName) {
    console.log('hit the gitStudent in ajaxAdaptor')
    return fetch(`/search/users-attributes?attr_type=${attrType}&attr_name=${attrName}`)
    .then(r => r.json())
    .catch(error=>{
      throw error
    })

  }

 loginUser(userInfo){
    console.log("IN loginUser userInfo = ", userInfo);
    return fetch('/user/authenticate',{
      method:'POST',
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(userInfo)
    })
  }


}//end Ajax Adaptor
