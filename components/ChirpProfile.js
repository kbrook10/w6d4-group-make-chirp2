import React from 'react'

class ChirpProfile extends React.Component {
  constructor(props) {
    super(props)
    //this.state
  }

  render() {
    return <div className="col-sm-3">
      <div className="panel panel-default">
        <div className="panel-body">

          <img src="img/logo.png" alt="profile pic" />
          <div className="row">
            <div className="col-sm-12 text-center">
              <h5>Name</h5>
              <p>Email</p>
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6 text-left text-muted">
              Following
            </div>
            <div className="col-xs-6 text-right text-muted">
              Followers
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default ChirpProfile
