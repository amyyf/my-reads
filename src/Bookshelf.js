import React from 'react';
import Book from './Book.js';

class Bookshelf extends React.Component {

  render () {
    const { books, shelfTitle } = this.props;

    return (
      <React.Fragment>
        <h2 className='bookshelf-title'>{shelfTitle}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {books.map(book => (
              <li key={book.id}>
                <Book
                  {...book}
                />
              </li>
            ))}
          </ol>
        </div>
      </React.Fragment>
    );
  }
}

export default Bookshelf;
