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

// function unshelfBook(bookTitle, shelf){
//    for (var i = 0; i < shelf.length; i++){
//     if (Object.values(shelf[i]).includes(bookTitle) === true){
//       shelf.splice(i, 1); 
//       return shelf
//     } else {
//     }
//   }
// }

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
//   var listOfTitles = []
//   for (var i = 0; i < shelf.length; i++){
//     listOfTitles.unshift(shelf[i].title)
//     return listOfTitles
//   }
// }
// ^^NOT FUNCTIONING

function listTitles(shelf){
  return shelf[0].title + ", " + shelf[1].title + ", " + shelf[2].title;
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};

