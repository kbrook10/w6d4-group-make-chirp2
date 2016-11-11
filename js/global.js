import React from 'react'
import ReactDOM from 'react-dom'
import Main from '../components/Main'
import FollowList from '../components/FollowList'
import { Router, Route, Link, hashHistory} from 'react-router'

window.sessionStorage.getItem('api_token')
window.sessionStorage.getItem('user')
console.log(sessionStorage.getItem('api_token'))
console.log(sessionStorage.getItem('user'))

/* NOTE: MAY NEED THESE LATER IN CODING
//import { sharedState, attachSharedState, detachSharedState} from 'react-helpers/dist/sharedState'
*/

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Main} />
        <Route path="/followlist" component={FollowList} />
    </Router>),
    document.getElementById('content')
)
