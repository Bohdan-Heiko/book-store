import React from "react";
import s from './style.module.css'
import withBookstoreSrvice from "../hoc/with-boostore-service";


const App = ({ bookstoreService}) => {

  console.log(bookstoreService.getBooks());
  return (
    <div className={s.app}>
      App
    </div>
  )
}

export default withBookstoreSrvice()(App);