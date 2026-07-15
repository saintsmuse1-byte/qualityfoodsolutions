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
        
        {/* --- 2. UPDATED CONSULTANT ROUTE PATHS --- */}
        {/* These now match the <Link to="..."> paths in your Home.js exactly */}
        <Route component={JamesProfile} exact path="/james" />
        <Route component={FleurProfile} exact path="/fleur" />
        
        {/* Keep these fallback catch-alls at the very bottom of the Switch list */}
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
