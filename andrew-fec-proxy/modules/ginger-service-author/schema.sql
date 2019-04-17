CREATE DATABASE IF NOT EXISTS authorData;

USE authorData;

CREATE TABLE IF NOT EXISTS books (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(50) NOT NULL,
  description varchar(2000) NOT NULL,
  author_id int,
  published_year int NOT NULL,
  cover varchar (1000) NOT NULL,
  status varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS authors (
  id int NOT NULL AUTO_INCREMENT,
  name varchar (50) NOT NULL,
  details varchar(2000) NOT NULL,
  profile_pic varchar (1000) NOT NULL,
  followers int,
  PRIMARY KEY (ID)
);
