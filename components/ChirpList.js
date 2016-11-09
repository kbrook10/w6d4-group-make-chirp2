import React from 'react'

class ChirpList extends React.Component {
  constructor(props) {
    super(props)
    //this.state
  }

  render() {
    return   <div className="col-sm-9">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="row">
                <div className="col-xs-2 ">
                  <img src="img/logo.png" alt="profile pic" className="smallerPic" />
                </div>
                <div className="col-xs-10 text-left">
                  <ul className="list-unstyled list-inline">
                    <li><strong>Name</strong></li>
                    <li>Email</li>
                    <li>Time Stamp</li>
                  </ul>
                  <div className="text-left"> Chirp Post </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  }
}

export default ChirpList
