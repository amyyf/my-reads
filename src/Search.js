import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book.js';
import { search } from './BooksAPI.js';

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      query: '',
      resultsList: []
    };
  }

  getResults () {
    if (this.state.query !== '') {
      search(this.state.query).then(results => this.populateResults(results));
    } else {
      this.populateResults([]); // clear out results if user deletes their query
    }
  }

  populateResults (results) {
    this.setState({ resultsList: results });
  }

  updateQuery (query) {
    this.setState({ query: query.trim() }, () => this.getResults());
  }

  render () {
    const { updateShelves } = this.props;
    return (
      <React.Fragment>
        <h1 className='hidden'>Search books by title or author</h1>
        <div className='search-books-bar'>
          <Link to='/' className='close-search' aria-label='close search'>Close</Link>
          <div className='search-books-input-wrapper'>
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type='text'
              placeholder='Search by title or author'
              aria-label='search by title or author'
              onChange={event => {
                this.updateQuery(event.target.value);
              }}
            />

          </div>
        </div>
        <div className='search-books-results'>
          {/*
            if no search results match query, an error object is returned,
            so check that resultsList is an array before attempting to map over
          */}
          {Array.isArray(this.state.resultsList)
            ? <ol className='books-grid'>
              {this.state.resultsList.map(book => (
                <li key={book.id}>
                  <Book
                    {...book}
                    onUpdate={updateShelves}
                  />
                </li>
              ))}
            </ol>
            : <div>No results</div>
          }
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
