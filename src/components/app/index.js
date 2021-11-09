import React from "react";
import s from './style.module.css'

import { Route, Switch } from 'react-router-dom'

import HomePage from '../pages/home-page'
import CardPage from '../pages/card-page'
import Header from "../header";
import ShopCartTable from "../shop-cart";


const App = () => {

  return (
    <main role='main' className={s.container}>
      <Header numItems={5} total={210}/>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/card' component={CardPage} />
      </Switch>
      <ShopCartTable />
    </main>
  )
}

export default App;