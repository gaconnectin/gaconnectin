DROP TABLE IF EXISTS user2attribute CASCADE;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS attributes;
DROP TABLE IF EXISTS invitations;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(24) NOT NULL unique ,
  password_digest TEXT NOT NULL,
  display_name VARCHAR(64) NOT NULL,
  image_url TEXT,
  invitation_token VARCHAR(24),
  slack VARCHAR(64),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE attributes (
  attribute_id SERIAL PRIMARY KEY NOT NULL,
  attr_name VARCHAR(64) NOT NULL,
  attr_name_lower VARCHAR(64),
  attr_type VARCHAR(12) NOT NULL,
  CONSTRAINT u_constraint UNIQUE (attr_name, attr_type)
);

CREATE TABLE user2attribute (
  user_id  INT references users (user_id) ON DELETE CASCADE ,
  attribute_id INT references attributes (attribute_id) ON DELETE CASCADE,
  CONSTRAINT user_attribute_pkey PRIMARY KEY (user_id, attribute_id)
);

CREATE TABLE invitations (
  invitation_id SERIAL PRIMARY KEY NOT NULL,
  invitation_token VARCHAR(24),
  is_used boolean DEFAULT false
);

CREATE INDEX on users (username) ;
CREATE INDEX on attributes (attr_name) ;
CREATE INDEX on invitations (invitation_token) ;

