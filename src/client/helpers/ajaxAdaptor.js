export default class AjaxAdapter {

constructor(fetch){
  if(!fetch) throw "We need to Fetch the DB !";
}

  handleSkillsList() {

    let self = this
     return fetch('/search/skills')
    .then(r => r.json())
    console.log(r)
    },

  handleInterestList() {
    let self = this
    return fetch('/search/interests')
    .then(r => r.json())
    console.log(r)
  }


}
