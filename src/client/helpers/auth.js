import ajaxAdaptor   from './ajaxAdaptor.js';
const ajax = new ajaxAdaptor(fetch);


//code from https://github.com/reactjs/react-router/blob/master/examples/auth-flow/auth.js
module.exports = {
  login(username, password, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    makeRequest(email, password, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        localStorage.username = res.username
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    })
  },

  getToken() {
    return localStorage.token
  },

  logout(cb) {
    delete localStorage.token
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn() {
    return !!localStorage.token
  },

  onChange() {}
}

function makeRequest(username, password, cb) {
  ajax.loginUser({ usrername: username,
                   password: password })
    .then(data=>{
      return data.json()
    }).then(data=> {
      console.log(data.token);
      console.log(data.username);
      console.log(data.status);
      if (data.token && data.username) {
        cb({
          authenticated: true,
          token: data.token,
          user: data.username
        })
      } else {
        cb({ authenticated: false})
      }
//      localStorage.setItem('token', data.token)
 //     localStorage.setItem('user', data.username)
      }
    )
}

