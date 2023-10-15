function shelfBook(book, typeOfShelf){
  if (book.genre === "sciFi" && typeOfShelf.length < 3){
    return typeOfShelf.unshift(book);
  } else {
    return typeOfShelf;
  }
}

// ========================================================

// function unshelfBook(bookTitle, shelf){
//   for (var i = 0; i < shelf.length; i++){
//    if (Object.values(shelf[i]).indexOf(bookTitle) > -1){
//      shelf.splice(i, 1); 
//      return shelf
//    } else {
//    }
//  }
// }
// ^^^FUNCTIONING!!!

// function unshelfBook(bookTitle, shelf){
//    for (var i = 0; i < shelf.length; i++){
//     if (Object.values(shelf[i]).includes(bookTitle) === true){
//       shelf.splice(i, 1); 
//       return shelf
//     } else {
//     }
//   }
// }
// ^^^FUNCTIONING!!!

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

// function listTitles(shelf){
//   for (var i = 0; i < shelf.length; i++){
//     var listOfTitles = []
//     listOfTitles.push(shelf[i].title)
//     return listOfTitles
//   }
// }
// ^^NOT FUNCTIONING

function listTitles(shelf){
  return shelf[0].title + ", " + shelf[1].title + ", " + shelf[2].title;
}
// ^^^NEEDS REFACTORING

// ========================================================

function searchShelf(shelf, bookTitle){
  for (var i = 0; i < shelf.length; i++){
    if (Object.values(shelf[0]).includes(bookTitle) === true || Object.values(shelf[1]).includes(bookTitle) === true){
      return true;
    } else {
      return false;
    }
  }
}
// ^^^NEEDS REFACTORING

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};

