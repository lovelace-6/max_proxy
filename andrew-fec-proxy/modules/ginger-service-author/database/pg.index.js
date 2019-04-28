//USING PG DRIVER
const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host:'localhost',
  database: 'bookshelf',
  password: 'altias',
  port: 5432,
})


var getBooks = async(id) => {
  console.log('pg received')

  try{

   var query = `select * from books where id =${id}`
   var response = await pool.query(query)
   return response.rows

  } catch (error){
    return error
  }
}

var getAuthor = async(authorId) => {
  console.log('getauthor')
  try {
    var query = `select * from authors where id = ${authorId}`

    var response = await pool.query(query)
    return response.rows[0]
  } catch (error){
    return error
  }
}

var getAuthorTitles = async (authorId) =>{
  try{
    var query = `select * from books where author_id = ${authorId}`

    var response = await pool.query(query)
    return response.rows

  } catch (error){
    return error
  }
}

var updateStatus = async (bookStatus, booksId) =>{
  console.log('pg updated')
  try{
    var query = `update books set status = ${bookStatus} where id = ${booksId}`

    var response = await pool.query(query)
    return response.rows

  } catch (error){
    return error
  }
}

//EXTENDED FEATURES OF CRUD
var deleteBook = async (id) =>{
  console.log('pg received')
  try{
   var query = `delete from books where id =${id}`
   var response = await pool.query(query)
   console.log(response)

  } catch (error){
    return error
  }
}

var addBook = async (value)=>{
  try{
    console.log('title', typeof value.title)
    var query =`insert into books(title,description, author_id, published_year, cover, status) VALUES ('${value.title}', '${value.description}', ${value.author_id}, ${value.published_year}, '${value.cover}', '${value.status}')`

    var response = await pool.query(query)

    console.log(response)

  } catch(error){
    return error
  }
}

module.exports = {
  getBooks:getBooks,
  getAuthor:getAuthor,
  getAuthorTitles:getAuthorTitles,
  updateStatus: updateStatus,
  addBook: addBook,
  deleteBook:deleteBook

}