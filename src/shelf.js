// function shelfBook(book, typeOfShelf){
//   var updatedShelf = typeOfShelf.push(book);
//   return updatedShelf;
// }

// function shelfBook(book, typeOfShelf){
//   if (book.genre === "sciFi"){
//     typeOfShelf[typeOfShelf.length] = book;
//     return typeOfShelf
//   } else {
//     return typeOfShelf
//   }
// }

// Non-functioning
// =====================================================
// Functioning

// function shelfBook(book, typeOfShelf){
//   return typeOfShelf.unshift(book);
// }

// function shelfBook(book, typeOfShelf){
//   if (book.genre === "sciFi"){
//     var updatedShelf = typeOfShelf.unshift(book);
//     return updatedShelf;
//   } else {
//     return typeOfShelf;
//   }
// }

function shelfBook(book, typeOfShelf){
  if (book.genre === "sciFi" && typeOfShelf.length < 3){
    return typeOfShelf.unshift(book);
  } else {
    return typeOfShelf;
  }
}

// ===================================================

function unshelfBook(){

}

module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};

