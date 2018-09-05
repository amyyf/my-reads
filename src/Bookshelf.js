import React from 'react';
import Book from './Book.js';

class Bookshelf extends React.Component {
  render () {
    return (
      <h2 className='bookshelf-title'>Currently Reading</h2> // display dynamically based on category
      <div className='bookshelf-books'>
        <ol className='books-grid'>

          /*
          map over array of books based on title(category) and render each as an li
          <Book
            changeShelf=prop
            key=prop
          />
          */

        </ol>
      </div>
    )
  }
}

export default Bookshelf;
