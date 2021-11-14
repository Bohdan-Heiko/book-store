import React from "react"
import s from './style.module.css'

import BookListItem from '../book-list-item'


const BookList = ({ books }) => {

  return (
    <ul className={s.bookList}>
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          )
        })
      }
    </ul>
  )
}

export default BookList