import React from "react"
import s from './style.module.css'

import BookListItem from '../book-list-item'


const BookList = ({ books, onAddedToCart }) => {

  return (
    <ul className={s.bookList}>
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book} onAddedToCart={() => onAddedToCart(book.id)} />
            </li>
          )
        })
      }
    </ul>
  )
}

export default BookList