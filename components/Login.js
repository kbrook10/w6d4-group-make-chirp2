import React from 'react'
import ReactDOM from 'react-dom'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: email,
            password: password,
        }
    }
    signinHandler() {
        var email = document.querySelector('#email').value
        var password = document.querySelector('#password').value

        fetch('https://arcane-reaches-97615.herokuapp.com/login', {
          body: JSON.stringify({
            email: email,
            password: password
          }),
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(signedinHandler)
    }
    signedinHandler(response){
        console.log(response)
        sessionStorage.setItem('chirply', response.api_token)
        sessionStorage.setItem('user', JSON.stringify(response.user))
    }
    render() {
        return window.location.href = './mainchirp.html'
    }
}

export default Login
