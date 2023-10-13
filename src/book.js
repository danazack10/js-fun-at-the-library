function createTitle(title) {
  var modifiedTitle = "The "
  return modifiedTitle + title;
}

function buildMainCharacter(name, age, pronouns){
  var character =
    {
      name: name,
      age: age,
      pronouns: pronouns,
    }
  return character;
}

function saveReview(newReview, reviews){
  var checkIfUnique = reviews.includes(newReview);
  if (checkIfUnique === false){
    return reviews.push(newReview);
  } else {
    return reviews;
  }
}

function calculatePageCount(title){
  var charactersInTitle = title.length;
  var pageCount = charactersInTitle * 20;
  return pageCount;
}

function writeBook(bookTitle, bookCharacter, bookGenre){
  var bookPages = calculatePageCount(bookTitle)
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: bookPages,
    genre: bookGenre
  }
  return book;
}

// function editBook(book){
//   var bookPages = book.pageCount;
//   console.log(bookPages);
//   var editedPages = (bookPages * 0.75);
//   console.log(editedPages);
//   return editedPages;
// }

function editBook(book){
  book.pageCount = (book.pageCount * (0.75));
  return book.pageCount;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}