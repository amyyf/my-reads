import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Bookshelf from './Bookshelf.js';
import Search from './Search.js';
import { Route, Link } from 'react-router-dom';

class BooksApp extends React.Component {
  constructor (props) {
    super(props);
    this.updateShelves = this.updateShelves.bind(this);
    this.state = {
      books: []
    };
  }

  componentDidMount () {
    this.updateShelves();
  }

  updateShelves () {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  render () {
    const shelves = [
      {shelfType: 'currentlyReading', shelfTitle: 'Currently Reading'},
      {shelfType: 'wantToRead', shelfTitle: 'Want to Read'},
      {shelfType: 'read', shelfTitle: 'Read'}
    ];

    return (
      <div className='app'>
        <Route exact path='/' render={() => (
          <div className='list-books'>
            <div className='list-books-title'>
              <h1>MyReads</h1>
            </div>
            <div className='list-books-content'>
              {shelves.map(shelf => (
                <div className='bookshelf' key={shelf.shelfType}>
                  <Bookshelf
                    books={this.state.books.filter(book => book.shelf === shelf.shelfType)}
                    shelfTitle={shelf.shelfTitle}
                    updateShelves={this.updateShelves}
                  />
                </div>
              ))}
            </div>
            <div className='open-search'>
              <Link to='/search'>
                Add a book
              </Link>
            </div>
          </div>
        )}
        />
        <Route
          path='/search'
          render={({ history }) => (
            <div className='search-books'>
              <Search
                updateShelves={this.updateShelves}
              />
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
