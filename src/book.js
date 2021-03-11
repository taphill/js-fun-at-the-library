function createTitle(title) {
  return "The " + title;
}

function buildMainCharacter(name, age, pronouns) {
  return { name: name, age: age, pronouns: pronouns };
}

function saveReview(review, reviews) {
  reviews.push(review);
  
  return [...new Set(reviews)];
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
