function makebooks(title,author,msrp,genre,numOfPage,description){
    return {title:title,
            author:author,
            msrp:msrp,
            genre:genre,
            numOfPage:numOfPage,
            description: description,
    }
}
var book1 = makebooks(
    'harry poter',
    'JK roling',
     16,
     'adventure/fiction',
      320,
     'harry is described as having his father s perpetually untidy black hair, his mother s bright green eyes, and a lightning bolt-shaped scar on his forehead')


var book2 = makebooks(
    'Romeo and Juliet',
    'William Shakespeare',
    8.8,
    'tragedy',
    264,
    'An age-old vendetta between two powerful families erupts into bloodshed')

var book3 = makebooks(
   ' Structure and Interpretation of Computer Programs',
   ['Gerald Jay Sussman', 'Hal Abelson'],
   75,
   'textbook',
    657,
    'It teaches fundamental principles of computer programming, including recursion, abstraction, modularity, and programming language design and implementation')






    function displaybook(book) {
        return book.title+' '+' '+book.genre + ' ' +book.numOfPage +' '
        
    }





    function displaybookssss(array) {
        for (var i = 0; i < array.length; i++) {
          var book = array[i]
          console.log(book.title + ' ' + book.genre + ' ' + book.numOfPage)
        }
      }
      
      displaybookssss(booksArray);





      function searchBooks(query, books) {
        query = query.toLowerCase()
          var matchingBooks = books.filter 
          var title = book.title.toLowerCase()
          var queryLength = query.length
      for (var i = 0; i <= title.length - queryLength; i++)      







      function removeBook(titleToRemove, books) {
        var indexToRemove = -1;
        for (var i = 0; i < books.length; i++) {
          if (books[i].title === titleToRemove) {
            indexToRemove = i
          }
        }
        if (indexToRemove !== -1) {
          books.splice(indexToRemove, 1)
        }
        return books
      }





