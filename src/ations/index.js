

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

export const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  }
}

export const bookRemoveFromCart = (bookId) => {
  return {
    type: 'BOOK_REMOVE_FROM_CART',
    payload: bookId
  }
}

export const allBookRemoveFromCart = (bookId) => {
  return {
    type: 'ALL_BOOK_REMOVE_FROM_CART',
    payload: bookId
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