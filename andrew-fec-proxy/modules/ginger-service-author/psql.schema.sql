CREATE DATABASE bookshelf;

\c bookshelf

CREATE TABLE IF NOT EXISTS books (
  id SERIAL PRIMARY KEY,
  title varchar(50) NOT NULL,
  description varchar(2000) NOT NULL,
  author_id integer,
  published_year int NOT NULL,
  cover varchar (1000) NOT NULL,
  status varchar(50) NOT NULL

);

CREATE TABLE IF NOT EXISTS authors (
  id SERIAL PRIMARY KEY,
  name varchar (50) NOT NULL,
  details varchar(2000) NOT NULL,
  profile_pic varchar (1000) NOT NULL,
  followers integer

);

--copies cvs file to postgres
\copy books(title,description,author_id, published_year, cover, status) FROM '/Users/Maxwell/Desktop/hrr37-FEC-Ginger-service/BooksData.csv' DELIMITER ',' CSV HEADER;

\copy authors(name, details, profile_pic, followers) FROM '/Users/Maxwell/Desktop/hrr37-FEC-Ginger-service/AuthorsData.csv' DELIMITER ',' CSV HEADER;