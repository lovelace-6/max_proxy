const mysql = require('mysql');
const config = require('./config');

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) throw err;
  console.log('connected');
});

const search = (search, values) => new Promise((resolve, reject) => {
  connection.query(search, values, (err, insert) => {
    if (err) return reject(err);
    resolve(insert);
  });
});

const addBook = value => search('INSERT INTO books (title, description, author_id, published_year, cover, status) VALUES (?, ?, ?, ?, ?, ?)', [value.title, value.description, value.author_id, value.published_year, value.cover, value.status]);

const addAuthor = value => search('INSERT INTO authors (name, details, profile_pic, followers) VALUES (?, ?, ?, ?)', [value.name, value.details, value.profile_pic, value.followers]);

const getBook = id => search(`SELECT * FROM books WHERE id =${id}`);

const getAuthor = id => search(`SELECT * FROM authors WHERE id =${id}`);

const getAuthorTitles = id => search(`SELECT * FROM books WHERE author_id =${id}`);

const updateStatus = (status, id) => search(`UPDATE books SET ? WHERE ?`, [{status: status}, {id: id}]);

const close = () => {
  connection.end();
};

module.exports = {
  addBook, addAuthor, getBook, getAuthor, getAuthorTitles, updateStatus, close
};
