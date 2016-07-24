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
  getUserAttributes(id) {
    let setId = location.pathname.split('/')
    setId = parseInt(setId[setId.length -1])
    return fetch(`/user/${setId}`)
    .then(r=> r.json())
  }


  getStudents(attrType, attrName) {
    console.log('hit the gitStudent in ajaxAdaptor')
    return fetch(`/search/users-attributes?attr_type=${attrType}&attr_name=${attrName}`)
    .then(r => r.json())
    .catch(error=>{
      throw error
    })

  }



}//end Ajax Adaptor
