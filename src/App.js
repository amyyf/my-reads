import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Book from './Book.js';
import Bookshelf from './Bookshelf.js';
import Search from './Search.js';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: [],
    // get React Router to do this
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  componentDidMount () {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
      console.log(this.state.books);
    })
  }

  render() {
    const shelves = [
      {shelfType: 'currentlyReading', shelfTitle: 'Currently Reading'},
      {shelfType: 'wantToRead', shelfTitle: 'Want to Read'},
      {shelfType: 'read', shelfTitle: 'Read'}
    ];

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">

            {/*
            <Search

            />
            */}

          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              {shelves.map((shelf) => (
                <div className="bookshelf" key={shelf.shelfType}>
                  <Bookshelf
                    shelfTitle={shelf.shelfTitle}
                  />
                </div>
              ))}

            </div>
            {/*I think this should be a button to be semantic*/}
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
