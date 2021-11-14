import React, { useEffect } from "react";

import BookList from '../book-list'
import Spiner from '../spiner'
import ErrorIndicator from '../error-indicator'
import withBookstoreSrvice from '../hoc/with-boostore-service'
import { fetchDataBooks } from '../../ations'

import { connect } from "react-redux";



const BookListContainer = (props) => {

  const { loading, books, error, fetchDataBooks } = props

  console.log(props);
  useEffect(() => {
    fetchDataBooks()

  }, [fetchDataBooks])

  if (error) {
    return <ErrorIndicator />
  }

  if (loading) {
    return <Spiner />
  }

  return (
   <BookList books={books} />

  )
}


const mapStateToProps = ({books, loading, error}) => {
  return {books, loading, error}
}


const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchDataBooks: fetchDataBooks(dispatch, bookstoreService)
  }
}


export default withBookstoreSrvice()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer))

