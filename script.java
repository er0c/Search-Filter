const results = document.getElementById("results");

var searchResults = books;

function showResults() {
  results.innerHTML = "";
  searchResults.forEach(book => {
    // create html book element for each search result
    let htmlBook = document.createElement('div');
    htmlBook.classList.add('result');
    htmlBook.innerHTML += '<div>' + book.title + '</div>';

    htmlBook.innerHTML += '<div>' + book.author + '</div>';
    htmlBook.innerHTML += '<div>' + book.tags + '</div>';
    htmlBook.innerHTML += '<div>' + book.pages + '</div>';
    htmlBook.innerHTML += '<div>' + book.publication_year + '</div>';
    // adds html book element to results div
    results.appendChild(htmlBook);
  });
}

// when the button 'Search' is pressed, this function is executed
function search() {
  // gets the filter type and query from page
  var filterType = document.getElementById("filter_type").value;
  var query = document.getElementById("query").value;

  // clear previous search results before setting the variable with the new search
  searchResults = [];

// a book matches if the book's title includes the parameter title
function searchByTitle(title) {
  title = title.toLowerCase();

  books.forEach(function (book) {
    if (book.title.toLowerCase().includes(title)) {
      searchResults.push(book);
    }
  });
}

// a book matches if the book's author includes the parameter author
function searchByAuthor(author) {
  author = author.toLowerCase();

  books.forEach(function (book){
    if(book.author.toLowerCase().includes(author)) {
      searchResults.push(book);
    }
  });
}

// a book matches if one of the book's tags matches the parameter tag EXACTLY
function searchByTag(tag) {
  books.forEach(function (book) {
    for (var i = 0; i < book.tags.length; ++i) {
      if (book.tags[i] == tag){
        searchResults.push(book);
        break;
      }
    }
  })
}


// a book matches if pagesLowerBound <= book.pages <= pagesUpperBound
function searchByPages(pagesLowerBound, pagesUpperBound) {
  books.forEach(function (book){
    if (pagesLowerBound <= book.pages && book.pages <= pagesUpperBound){
    searchResults.push(book);
    }
  });
}

// a book matches if yearLowerBound <= book.publication_year <= yearUpperBound
function searchByPublicationYear(yearLowerBound, yearUpperBound) {
  books.forEach(function (book){
    if (yearLowerBound <= book.publication_year && book.publication_year <= yearUpperBound){
      searchResults.push(book);
    }
  });
}

showResults();
