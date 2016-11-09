import React from 'react'

class ChirpProfile extends React.Component {
  constructor(props) {
    super(props)
    this.uploadChirps = this.uploadChirps.bind(this)
    this.state = {
      post: '',
      posts: []
    }
  }

  uploadChirps(e){
    var tokenId = 'api_token'
    var token = sessionStorage.getItem(tokenId)
    if (e.key === 'Enter'){
      fetch('https://polar-sea-81260.herokuapp.com/users/user_id/posts'/*?api_token=' + token*/, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(response => console.log(response))

    }
  }

  render() {
    return <div className="col-sm-9">
    <div className="panel panel-default">
    <div className="panel-body">
    <textarea type="text" rows="4" cols="65" placeholder="What's happening..." value={this.state.value} onChange={this.typing} onKeyPress={this.uploadChirps}>
    </textarea>
    {/* <div className="text-right">
    <button id="tweet" value={this.state.body} onClick={this.uploadChirps} className="btn tweetbtn" onChange={this.typing} type="button">Chirped</button>
    </div> */}
    </div>
    </div>
    </div>
  }
}

export default ChirpProfile
