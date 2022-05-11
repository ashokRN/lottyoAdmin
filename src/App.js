

import React from 'react'
import {BrowserRouter, Route, Switch,}  from "react-router-dom";
import Event from './components/Event_booking/Event';
import User from './components/User_Management/User'

const App = () => {
  return (
    <BrowserRouter>
    {
      <Switch>
        <Route path='/event' component={Event}/>
        <Route path='/user' component={User}/>

       </Switch>
    }
    </BrowserRouter>
  )
}

export default App;

