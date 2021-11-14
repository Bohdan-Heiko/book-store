
const initialState = {
  books: [],
  loading: true,
  error: null
}

const reducer = (state = initialState, action) => {
 
  switch (action.type) {

    case 'FETCH_BOOKS_SUCCESS':
      return {
        books: [],
        loading: true,
        error: null
      }
    case 'FETCH_BOOKS_REQUEST':
      return {
        books: action.payload,
        loading: false,
        error: null
      }
    case 'FETCH_BOOKS_ERROR':
      return {
        books: [],
        loading: true,
        error: action.payload
      }
    default: return state
  }

  
}

export default reducer;