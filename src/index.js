import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Services from './views/services'
import NotFound from './views/not-found'

// --- 1. IMPORTED NEW CONSULTANT PAGES ---
import JamesProfile from './views/james'
import FleurProfile from './views/fleur'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Services} exact path="/services" />
        
        {/* --- 2. ADDED NEW CONSULTANT ROUTE PATHS --- */}
        <Route component={JamesProfile} exact path="/consultant-james" />
        <Route component={FleurProfile} exact path="/consultant-fleur" />
        
        {/* Keep these fallback catch-alls at the very bottom of the Switch list */}
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
