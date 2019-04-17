const faker = require('faker');

const name = faker.name.findName;
const details = faker.lorem.paragraphs;
const title = faker.commerce.productName;
const description = faker.lorem.paragraphs;
const year = faker.random.number;
const author_id = faker.random.number;
const cover = 'http://d37pd3xfja253q.cloudfront.net/books/sample-image-';
const profilePic = 'http://d37pd3xfja253q.cloudfront.net/authors/sample-image-';
const followers = faker.random.number;
const status = 'Want to Read';


module.exports = {
  name, details, title, description, year, author_id, cover, status, profilePic, followers
};
