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

// PSEUDOCODE
// this will be a function w/ 3 parameters
// - P1 (library = object) = library.shelves contain 3 genre properties holding arrays of book objects
// - P2 (bookName = string) = accessed via library.shelves.insertgenre[0].title
// - P3 (genre = string) = accessed via library.shelves.insertgenre[0].genre
// return/output will be an interpolated string
// 
// STEPS
// 1. Identify if book is present on the shelf
// 2. Remove book from shelf
// 3. Print out string statement that it has been removed 

function checkoutBook(library, bookName, genre){
  for (var i = 0; i < library.shelves.fantasy.length; i++)
    if (Object.values(library.shelves.fantasy[i]).includes(genre) === true) {
      library.shelves.fantasy.splice(i, 0)
    } else {
    }
  for (var i = 0; i < library.shelves.fiction.length; i++)
    if (Object.values(library.shelves.fiction[i]).includes(genre) === true) {
      library.shelves.fiction.splice(i, 0)
    } else {
    }
  for (var i = 0; i < library.shelves.nonFiction.length; i++)
    if (Object.values(library.shelves.nonFiction[i]).includes(genre) === true) {
    library.shelves.nonFiction.splice(i, 0)
    } else {
    }
  return `You have now checked out ${bookName} from ${library}`
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