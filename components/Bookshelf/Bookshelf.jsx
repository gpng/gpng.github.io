import React from 'react';
import { BOOKS_2021, BOOKS_2022 } from '../../data/books';
import Book from './Book';
import slugify from 'slugify';

const slugifiedTitle = (title) =>
  slugify(title, {
    lower: true,
    strict: true,
    trim: true,
  });

const getCoverUrl = (book) => `static/images/covers/${slugifiedTitle(book.title)}.jpg`;

const Bookshelf = () => {
  return (
    <div className="bookshelf">
      <h3>2022</h3>
      <div className="shelf">
        {BOOKS_2022.map((book) => (
          <Book
            key={book.title}
            title={book.title}
            coverImageUrl={getCoverUrl(book)}
            author={book.author}
          />
        ))}
      </div>
      <h3>2021</h3>
      <div className="shelf">
        {BOOKS_2021.map((book) => (
          <Book
            key={book.title}
            title={book.title}
            coverImageUrl={getCoverUrl(book)}
            author={book.author}
          />
        ))}
      </div>
      <style jsx>{`
        .bookshelf {
        }

        .shelf {
          display: flex;
          flex-wrap: wrap;
          gap: 1px;
          margin-bottom: 3rem;
        }

        h3 {
          font-size: 1.5rem;
        }
      `}</style>
    </div>
  );
};

export default Bookshelf;
