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

function checkoutBook(){

}

function takeStock(){

}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};