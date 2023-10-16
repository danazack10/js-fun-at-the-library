function createLibrary(Libraryname){
  var library = {
    name: Libraryname,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
    }
    return library
  };


// =========================================================

// function addBook(library, bookName){
//   return library.shelves.fantasy.push(bookName);
// }

function addBook(library, bookName){
  if (bookName.genre === "fantasy"){
    return library.shelves.fantasy.push(bookName);
  } else if (bookName.genre === "fiction"){
    return library.shelves.fiction.push(bookName);
  } else {
    return library.shelves.nonFiction.push(bookName);
  }
}

// =========================================================

// Notes: library is an array of objects, and bookName & 
// genre are both key values within objects within the library array

// PSEUDOCODE
// 1) see if genre within shelf contains bookName

function checkoutBook(library, bookName, genre){
  if (Object.keys(library.shelves).includes(genre) === true) {
    library.shelves.genre.splice[0, 1]
    return `You have now checked out ${bookName} from ${library}`
  }
}

// function checkoutBook(library, bookName, genre){
//   for (var i = 0; i < library.shelves.fiction.length; i++){
//     if (genre === )
//     if (bookName.genre === "fantasy"){
//       return library.shelves.fantasy.push(bookName);
//     } else if (bookName.genre === "fiction"){
//       return library.shelves.fiction.push(bookName);
//     } else {
//       return library.shelves.nonFiction.push(bookName);
//     }
//   }
// }

// =========================================================

function takeStock(){

}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};