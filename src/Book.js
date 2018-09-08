import React from 'react';

class Book extends React.Component {

  state = {
    currentShelf: this.props.shelf
  }

  render () {
    const {title, authors, imageLinks: {smallThumbnail: img}} = this.props;
    return (
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url("${img}")` }}></div>
          <div className='book-shelf-changer'>
            <select>
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
    )
  }
}

export default Book;
