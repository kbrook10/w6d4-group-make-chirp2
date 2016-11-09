import React from 'react'
import ChirpList from './Chirplist'
import ChirpProfile from './ChirpProfile'
import ChirpTextbox from './ChirpTextbox'

class Main extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {}
    }
    render() {
        return ( <div>
        <nav class="navbar navbar-inverse navbar-fixed-top">
          <div class="container-fluid">
            <div class="navbar-header navbar-right">
              <a class="navbar-brand" href="#">Chirp</a>


            </div>
            <div id="navbar" class="navbar-collapse collapse">
              <ul class="nav navbar-nav navbar-left">
                <li><a href="#">Home</a></li>
                <li><a href="#">Moments</a></li>
                <li><a href="#">Notifications</a></li>
                <li><a href="#">Messages</a></li>
              </ul>
              <div class="input-group col-sm-6 navbar-right padBox">
                <input type="text" class="form-control" placeholder="Search for..." />
                <span class="input-group-btn">
                  <button id="logout" class="btn btn-secondary" type="button">Log Out</button>
                </span>
              </div>
            </div>
          </div>
        </nav>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="container">
          <div class="row">
          </div>
        </div>
        <ChirpProfile />
        <ChirpTextbox />
        <ChirpList />
        </div>)
    }
}

export default Main
