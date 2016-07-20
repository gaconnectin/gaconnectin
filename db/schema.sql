DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS attributes;
DROP TABLE IF EXISTS user2attribute;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(24) NOT NULL unique,
  password_digest VARCHAR NOT NULL,
  name VARCHAR(64) NOT NULL,
  slack VARCHAR(64)
);

CREATE TABLE attributes (
  attribute_id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(64) NOT NULL,
  type VARCHAR(12) NOT NULL
);

CREATE TABLE user2attribute (
  user_id INT NOT NULL,
  attribute_id INT NOT NULL
);
