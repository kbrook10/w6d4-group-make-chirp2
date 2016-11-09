import React from 'react'
import { Link } from 'react-router'
import Login from './Login'
import Signup from './Signup'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.signinHandler = this.signinHandler.bind(this)
        this.signedinHandler = this.signedinHandler.bind(this)
        this.state = {
            email: '',
            password: '',
        }
    }
    signinHandler() {

      // TODO: Need the path to send captured signin data to DB
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

    signedinHandler(response) {
      console.log(response)
      sessionStorage.setItem('chirply', response.user.api_token)
      sessionStorage.setItem('user', JSON.stringify(response.user))
      // TODO: Needs to direct to the chirps view page...
      window.location.href = './mainchirp.html'
    }

    render() {
        return<div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
                <img src="img/logo.png" alt="chirp" />
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={this.state.email} className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={this.state.password} className="form-control" required />
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-6">
                    <Link to="/signup"><button id="signup" type="button" className="btn  btn-block">Sign Up!</button>
                    </Link>
                  </div>
                  <div className="col-sm-6">
                    <button id="/login" type="button" className="btn btn-block" onClick={this.signinHandler}>Log In!</button>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
    }
}

export default Home
