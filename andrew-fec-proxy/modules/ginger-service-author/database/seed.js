const db = require('./index.js');
const data = require('../database/dummy_data.js');

const createBook = () => {
  for (let i = 0; i < 100; i++) {
    db.addBook({
      title: data.title(), description: data.description(), author_id: data.author_id({ min: 1, max: 25 }), published_year: data.year({ min: 1920, max: 2019 }), cover: data.cover + data.author_id({min: 1, max: 7}) + '.jpg', status: data.status
    });
  }
};

const createAuthor = () => {
  for (let i = 0; i < 25; i++) {
    db.addAuthor({
      name: data.name(), details: data.details(), profile_pic: `${data.profilePic + data.author_id({ min: 1, max: 3 })}.jpg`, followers: data.followers({min: 0, max: 20000})
    });
  }
};

async function seed() {
  await createBook();
  await createAuthor();
}

seed().then(() => {
  db.close();
});
