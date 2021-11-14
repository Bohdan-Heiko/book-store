

const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_REQUEST',
    payload: newBooks
  }
}

const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_SUCCESS'
  }
}

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_ERROR',
    payload: error
  }
}

const fetchDataBooks = (dispatch, bookstoreService) => () => {
  dispatch(booksRequested())
  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)))
}

export {
  // booksLoaded,
  // booksRequested,
  // booksError
  fetchDataBooks
}