import React, { useEffect } from "react";
import BookListItem from '../book-list-item'
import withBookstoreSrvice from '../hoc/with-boostore-service'
import { booksLoaded } from '../../ations'

import { connect } from "react-redux";

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

const BookList = ({ books, bookstoreService, booksLoaded }) => {

  useEffect(() => {
    const data = bookstoreService.getBooks()
    booksLoaded(data)
  }, [bookstoreService, booksLoaded])

  return (
    <ul>
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

const mapStateToProps = ({books}) => {
  return {books}
}


const mapDispatchToProps = {
 booksLoaded
}

export default withBookstoreSrvice()(connect(mapStateToProps, mapDispatchToProps)(BookList))
