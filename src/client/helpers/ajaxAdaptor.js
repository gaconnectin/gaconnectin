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

  getUserAttributes(id) {
    let setId = location.pathname.split('/')
    setId = parseInt(setId[setId.length -1])
    return fetch(`/user/${setId}`)
    .then(r=> r.json())
  }
  updateUser(userInfo) {
    let setId = location.pathname.split('/')
    console.log(userInfo)
    setId = parseInt(setId[setId.length -1])
    return fetch(`/user/${setId}`, {
      method:'POST',
      headers: {
        "Content-type":
              "application/json; charset=UTF-8"
      },
      body: JSON.stringify(userInfo)
    })
  }

    createUser(userInfo) {
    // let setId = location.pathname.split('/')
    // setId = parseInt(setId[setId.length -1])
    console.log(userInfo)
    return fetch('/user', {
      method:'POST',
      headers: {
        "Content-type":
              "application/json; charset=UTF-8"
      },
      body: JSON.stringify(userInfo)
    })
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
