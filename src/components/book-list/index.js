import React, { useEffect } from "react";
import s from './style.module.css'

import BookListItem from '../book-list-item'
import Spiner from '../spiner'
import ErrorIndicator from '../error-indicator'
import withBookstoreSrvice from '../hoc/with-boostore-service'
import { booksLoaded, booksRequested, booksError } from '../../ations'

import { connect } from "react-redux";



const BookList = (props) => {

  const { loading, books, error, fetchDataBooks } = props

  console.log(props);
  useEffect(() => {
    fetchDataBooks()

  }, [fetchDataBooks])

  if (error) {
    return <ErrorIndicator />
  }

  return (
    <ul className={s.bookList}>
      {
        loading ? <Spiner /> 
          : books.map((book) => {
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

const mapStateToProps = ({books, loading, error}) => {
  return {books, loading, error}
}


const mapDispatchToProps = (dispatch, ownProperty) => {
    const {bookstoreService} = ownProperty
  return {
    fetchDataBooks: () => {
      dispatch(booksRequested())
      bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)))
    }
    
  }
  // booksLoaded,
  // booksRequested,
  // booksError
}

export default withBookstoreSrvice()(connect(mapStateToProps, mapDispatchToProps)(BookList))


// class BookList extends Component {

//   componentDidMount() {
//     const {bookstoreService} = this.props;
//     const data = bookstoreService.getBooks()
//     console.log('data', data);
//     this.props.booksLoaded(data)
//   }

//   render() {
//   const {books} = this.props
//       return (
//         <ul>
//         {
//             books.map((book) => {
//               return (
//                 <li key={book.id}>
//                   <BookListItem book={book} />
//                 </li>
//               )
//             })
//           }
//         </ul>
//       )
//     }
// }

// const total = [0, 1, 2, 3].reduceRight(function (a, b) {
//   return a + b;
// }