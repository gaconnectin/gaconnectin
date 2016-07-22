export default class AjaxAdapter {

  getSkills() {
    console.log("hit getSkills AjaxAdapter")
     return fetch('/search/skills')
    .then(r => r.json())
    console.log(r)
    }

  getInterests() {
    console.log("hit getInterest AjaxAdapter")
    return fetch('/search/interests')
    .then(r => r.json())
    console.log(r)
  }


}
