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

function checkoutBook(library, bookName, genre){
  if (genre === "fantasy"){
    for (var i = 0; i < library.shelves.fantasy.length; i++){
      if (Object.values(library.shelves.fantasy[i]).includes(bookName) === true) {
        library.shelves.fantasy.splice(i, 1)
        return `You have now checked out ${bookName} from the ${library.name}.`
      }
    }
    return `Sorry, there are currently no copies of ${bookName} available at the ${library.name}.`
  } else if (genre === "fiction"){
    for (var i = 0; i < library.shelves.fiction.length; i++){
      if (Object.values(library.shelves.fiction[i]).includes(bookName) === true) {
        library.shelves.fiction.splice(i, 1)
        return `You have now checked out ${bookName} from the ${library.name}.`
      }
    }
    return `Sorry, there are currently no copies of ${bookName} available at the ${library.name}.`
  } else if (genre === "nonFiction"){
    for (var i = 0; i < library.shelves.nonFiction.length; i++){
      if (Object.values(library.shelves.nonFiction[i]).includes(bookName) === true) {
        library.shelves.nonFiction.splice(i, 1)
        return `You have now checked out ${bookName} from the ${library.name}.`
      }
    }
    return `Sorry, there are currently no copies of ${bookName} available at the ${library.name}.`
  }
}

// =========================================================

function takeStock(library, genre){
  var totalBooks = [];
  if (genre === "fantasy") {
    return `There are a total of ${library.shelves.fantasy.length} ${genre} books at the ${library.name}.`
  } else if (genre === "fiction") {
    return `There are a total of ${library.shelves.fiction.length} ${genre} books at the ${library.name}.`
  } else if (genre === "nonFiction") {
    return `There are a total of ${library.shelves.nonFiction.length} ${genre} books at the ${library.name}.`
  } else if (genre === undefined) {
    return `There are a total of ${library.shelves.fantasy.concat(library.shelves.fiction).concat(library.shelves.nonFiction).length} books at the ${library.name}.`
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};