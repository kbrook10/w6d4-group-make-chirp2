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
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header navbar-right">
              <a className="navbar-brand" href="#">Chirp</a>


            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-left">
                <li><a href="#">Home</a></li>
                <li><a href="#">Moments</a></li>
                <li><a href="#">Notifications</a></li>
                <li><a href="#">Messages</a></li>
              </ul>
              <div className="input-group col-sm-6 navbar-right padBox">
                <input type="text" className="form-control" placeholder="Search for..." />
                <span className="input-group-btn">
                  <button id="logout" className="btn btn-secondary" type="button">Log Out</button>
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
        <div className="container">
          <div className="row">
          </div>
        </div>
        <ChirpProfile />
        <ChirpTextbox />
        <ChirpList />
        </div>)
    }
}

export default Main
