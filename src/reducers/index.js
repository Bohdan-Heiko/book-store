const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 0
}


const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ]
  }

  if (idx === - 1) {
    return [
      ...cartItems,
      item
    ]
  } else {
    return [
      ...cartItems.slice(0, idx),
      item,
      ...cartItems.slice(idx + 1)
    ]
  } 
}

const updateCartItem = (book, item = {}, quantity) => {

  const { id = book.id,
    count = 0,
    title = book.title,
    total = 0
  } = item

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price
  }
}

const updateOrder = (state, bookId, quantity) => {
  const { books, cartItems } = state
 
  const book = books.find(({ id }) => id === bookId)
  const indexItem = cartItems.findIndex(({ id }) => id === bookId)
  const item = cartItems[indexItem]
  const newItem = updateCartItem(book, item, quantity)


  console.log(book);
  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, indexItem),
  }
}

const reducer = (state = initialState, action) => {
 
  switch (action.type) {
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      }
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      }
    case 'FETCH_BOOKS_ERROR':
      return {
        ...state,
        books: [],
        loading: true,
        error: action.payload
      }
    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1)
      
    case 'BOOK_REMOVE_FROM_CART':
      return updateOrder(state, action.payload, -1)

    case 'ALL_BOOK_REMOVE_FROM_CART':
      const item = state.cartItems.find(({ id }) => id === action.payload)
      return updateOrder(state, action.payload, -item.count)
       
    default: return state
  }  
}

export default reducer;