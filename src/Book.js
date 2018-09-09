import React from 'react';
import { update } from './BooksAPI.js';

class Book extends React.Component {
  constructor (props) {
    super(props);
    this.selectShelf = this.selectShelf.bind(this);
  }

  selectShelf (event) {
    const newShelf = event.target.value;
    update(this.props, newShelf).then(() =>
      this.props.onUpdate()
    );
  }

  render () {
    const {title, authors, imageLinks: {smallThumbnail: img}} = this.props;
    return (
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url("${img}")` }} />
          <div className='book-shelf-changer'>
            <select value={this.props.shelf} onChange={this.selectShelf} aria-label='select a shelf'>
              <option value='move' disabled>Move to...</option>
              <option value='currentlyReading'>Currently Reading</option>
              <option value='wantToRead'>Want to Read</option>
              <option value='read'>Read</option>
              <option value='none'>None</option>
            </select>
          </div>
        </div>
        <div className='book-title'>{title}</div>
        {/* NOTE should authors be a list? most books only have one author, but for the ones that have multiples... */}
        {authors.map(author => (
          <div className='book-authors' key={author}>{author}</div>
        ))}
      </div>
    );
  }
}

Book.defaultProps = {
  authors: [],
  imageLinks: {smallThumbnail: ''},
  shelf: 'none'
};

export default Book;
