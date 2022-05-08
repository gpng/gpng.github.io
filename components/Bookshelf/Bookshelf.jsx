import React from 'react';
import Book from './Book';

const BOOKS_2021 = [
  {
    title: 'A Master of Djinn',
    coverImageUrl:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1600715136l/52504334._SY475_.jpg',
    author: 'P. Djèlí Clark',
  },
  {
    title: 'A Dead Djinn in Cairo',
    coverImageUrl:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1459173382l/29635542.jpg',
    author: 'P. Djèlí Clark',
  },
  {
    title: 'The Haunting of Tram Car 015',
    coverImageUrl:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1537226167l/36546128.jpg',
    author: 'P. Djèlí Clark',
  },
  {
    title: 'Ring Shout',
    coverImageUrl:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1580134382l/49247242.jpg',
    author: 'P. Djèlí Clark',
  },
];

const Bookshelf = () => {
  return (
    <div className="bookshelf">
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
        }
      `}</style>
    </div>
  );
};

export default Bookshelf;
