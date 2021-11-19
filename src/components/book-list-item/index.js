import React from "react";
import s from './style.module.css'

const   BookListItem = ({book, onAddedToCart}) => {
 const {title, author, price, coverImage} = book
  return (
    <>
      <div className={s.book_list_item}>
        <div className={s.book_cover}>
          <img src={coverImage} alt="cover" />
        </div>
        <div className={s.book_details}>
          <a href="/" className={s.book_title}>{title}</a>
          <div className={s.book_author}>{author}</div>
          <div className={s.book_price}>{price}$</div>
          <button
            onClick={onAddedToCart}
            className='btn btn-info add-to-cart'>
            Add to cart
          </button>
        </div>
      </div>
    </>
  )
}

export default BookListItem