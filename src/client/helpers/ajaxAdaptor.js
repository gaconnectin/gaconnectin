export default class AjaxAdaptor {

  constructor(fetch){
    if(!fetch) throw "HELP";
  }

  getSkills() {
    console.log("hit getSkills AjaxAdapter")
     return fetch('/search/skills')
    .then(r => r.json())
    }

  getInterests() {
    console.log("hit getInterest AjaxAdapter")
    return fetch('/search/interests')
    .then(r => r.json())
    console.log(r)
  }


}
