
const csv = require('fast-csv');
const fs = require('fs');
const data = require('../database/dummy_data.js')


const generateBooks = (id) =>{
//note to self, added booksID field for mongodb to avoid using objectID
  var books = {
    booksID: id,
    title: data.title(),
    description: data.description(),
    author_id: data.author_id({min:1, max:1000000}),
    published_year: data.year({ min: 1920, max: 2019}),
    cover: data.cover + data.author_id({min:1,max: 7})+'.jpg',
    status: data.status}

    return books
}

//added authorID for mongodb specific use case
const generateAuthor = (id) => {

 var authors = {
    authorsID: id,
    name: data.name(),
    details: data.details(),
    profile_pic: data.profilePic(),
    followers: data.followers({min: 0, max: 20000})
  }
  return authors
}


//Writing CSV file
var csvStream = csv.createWriteStream({headers: true})
var writableStream = fs.createWriteStream("BooksData.csv");

writableStream.on("finish", function(){
  console.log("Books DONE!");
});

csvStream.pipe(writableStream);
csvStream.on('drain', function() {
  writeBooks();
});

var numOfBooks = 1;

function writeBooks(){

while( numOfBooks<10000001){
if(!csvStream.write(generateBooks(numOfBooks))){
  numOfBooks++
  return
  }
numOfBooks++
}
var end = new Date() - start
console.log('time required to generate CSV',end, 'ms')
csvStream.end();

}

var start = new Date()
writeBooks()


var csvStreamAuthors = csv.createWriteStream({headers: true})
var writableStreamAuthors = fs.createWriteStream("AuthorsData.csv");

writableStreamAuthors.on("finish", function(){
  console.log("Authors DONE!");
});

csvStreamAuthors.pipe(writableStreamAuthors);
csvStreamAuthors.on('drain', function() {
  writeAuthors();
});
var numOfAuthors =1;

function writeAuthors(){

while( numOfAuthors<1000001){
if(!csvStreamAuthors.write(generateAuthor(numOfAuthors))){
  numOfAuthors++
  return
  }
numOfAuthors++
}
var endAuthors = new Date() - startAuthors
console.log('time required to generate CSV',endAuthors, 'ms')
csvStreamAuthors.end();

}

var startAuthors = new Date()
writeAuthors()




module.exports = {
  generateBooks: generateBooks,
  generateAuthor: generateAuthor
}