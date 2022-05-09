import React from 'react';
import { BOOKS_2021, BOOKS_2022 } from '../../data/books';
import Book from './Book';

const Bookshelf = () => {
  return (
    <div className="bookshelf">
      <h3>2021</h3>
      <div className="shelf">
        {BOOKS_2022.map((book) => (
          <Book
            key={book.title}
            title={book.title}
            coverImageUrl={book.coverImageUrl}
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
            coverImageUrl={book.coverImageUrl}
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
