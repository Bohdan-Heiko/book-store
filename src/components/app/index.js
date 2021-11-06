import React from "react";
import s from './style.module.css'

import { Route, Switch } from 'react-router-dom'

import HomePage from '../pages/home-page'
import CardPage from '../pages/card-page'


const App = () => {

  return (
    <div className={s.app}>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/card' component={CardPage} />
      </Switch>
      
    </div>
  )
}

export default App;