function shelfBook(book, typeOfShelf){
  if (book.genre === "sciFi" && typeOfShelf.length < 3){
    return typeOfShelf.unshift(book);
  } else {
    return typeOfShelf;
  }
}

// ========================================================

function unshelfBook(bookTitle, shelf){
  for (var i = 0; i < shelf.length; i++){
   if (shelf[i].title === bookTitle){
     shelf.splice(i, 1); 
     return shelf
   } else {
   }
 }
}

// ========================================================

function listTitles(shelf){
  var listOfTitles = []
  for (var i = 0; i < shelf.length; i++){
    listOfTitles.push(shelf[i].title)
  }
  return listOfTitles.join().replace(/,/g, ", ");
}
// ========================================================

function searchShelf(shelf, bookTitle){
  var containsBook = [];
  for (var i = 0; i < shelf.length; i++){
    if (bookTitle === shelf[i].title){
      containsBook.push(shelf[i]);
    }
  }
  return containsBook.length > 0
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};

