import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/home'
import Part1 from './pages/part1'

function App () {
  return (
    <Router>
      <Switch>
        <Route path="/part1">
          <Part1 />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
