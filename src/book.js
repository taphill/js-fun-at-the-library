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

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}
