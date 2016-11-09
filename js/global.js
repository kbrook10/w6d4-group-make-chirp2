//Local API host to use https://polar-sea-81260.herokuapp.com/
import { Router, Route, Link, browserHistory} from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom'

import Home from '../components/Home'
import Signup from '../components/Signup'
import Main from '../components/Main'
import FollowList from '../components/FollowList'
// import Login from '../components/Login'

/* NOTE: MAY NEED THESE LATER IN CODING
//import { sharedState, attachSharedState, detachSharedState} from 'react-helpers/dist/sharedState'
*/

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path='/' component={Home} />
      <Route path='/signup' component={Signup} />
      <Route path='/main' component={Main} />
      <Route path='/followlist' component={FollowList} />
      {/* <Route path='/login' component={Login} /> */}
    </Router>
), document.getElementById('homePage'))
