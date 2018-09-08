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
  // TODO make a page for empty search results - i.e. 'no books match your search'
  // TODO handle reset when query string is deleted and s/b empty again
  // TODO trimming to handle whitespace on edges

  getResults () {
    console.log(this.state.query);
    if (this.state.query) {
      search(this.state.query).then(results => this.populateResults(results));
    }
  }

  populateResults (results) {
    this.setState({ resultsList: results });
  }

  updateQuery (query) {
    this.setState({ query: query }, () => this.getResults());
  }

  render () {
    const { updateShelves } = this.props;
    return (
      <React.Fragment>
        <div className='search-books-bar'>
          <Link to='/' className='close-search'>Close</Link>
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
              onChange={event => {
                this.updateQuery(event.target.value);
              }}
            />

          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            {this.state.resultsList.map(book => (
              <li key={book.id}>
                <Book
                  {...book}
                  onUpdate={updateShelves}
                />
              </li>
            ))}
          </ol>
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
