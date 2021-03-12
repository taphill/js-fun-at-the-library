function createTitle(title) {
  return "The " + title;
}

function buildMainCharacter(name, age, pronouns) {
  return { name: name, age: age, pronouns: pronouns };
}

function saveReview(review, reviews) {
  if (reviews.includes(review)) {
    return reviews;
  } else {
    reviews.push(review);
    return reviews;
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20; 
}

function writeBook(title, character, genre) {
  book = {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: genre
  };

  return book;
}

function editBook(book) {
  book.pageCount = 0.75 * book.pageCount;

  return book;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
