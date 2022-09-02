const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const slugify = require('slugify');
const { BOOKS_2021, BOOKS_2022 } = require('../data/books.js');

const openLibraryCoverUrl = (openLibraryId) => `https://covers.openlibrary.org/b/olid/${openLibraryId}-M.jpg`

const downloadImage = (title, coverImageUrl, openLibraryId) => {
  const url = openLibraryId ? openLibraryCoverUrl(openLibraryId) : coverImageUrl;
  const filePath = path.resolve(__dirname, `../public/static/images/covers/${slugify(title, {
    lower: true,
    strict: true,
    trim: true
  })}.jpg`);
  if (fs.existsSync(filePath)) {
    console.log(`Skipping ${title} because it already exists`);
    return;
  }
  fetch(url).then(res => {
    res.buffer().then(buffer => {
      fs.writeFile(filePath, buffer, () => {
        console.log(`Saved to ${filePath}`);
      });
    })
  })
}

const books = [...BOOKS_2021, ...BOOKS_2022]

books.forEach(book => {
  downloadImage(book.title, book.coverImageUrl, book.openLibraryId)
})