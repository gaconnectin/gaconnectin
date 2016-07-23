DELETE FROM users ;
DELETE FROM attributes ;
DELETE FROM user2attribute ;


INSERT INTO users
  (password_digest, username, display_name, slack)
  VALUES
  ('password',' Aaron A','Aaron Aaronson', 'a_son'),
  ('password','John D','John Darby', 'git_kong'),
  ('password','Rubi L','Rubi Lenowitz', 'dolphinecutie');

INSERT INTO invitations
  (invitation_token)
  VALUES
  ('test1'),
  ('test2'),
  ('test3') ;


INSERT INTO attributes
  (attr_name, attr_type)
  VALUES
  ('comic books', 'interest'),
  ('social drinking', 'interest'),
  ('horse back riding', 'interest'),
  ('biking', 'interest'),
  ('movies', 'interest'),
  ('swimming', 'interest'),
  ('hiking', 'interest'),
  ('foodie', 'interest'),
  ('video games', 'interest'),
  ('Pokemon', 'interest'),
  ('cross training', 'interest'),
  ('running', 'interest'),
  ('walk', 'interest'),
  ('chess', 'interest'),
  ('gardening', 'interest'),
  ('cat lover', 'interest'),
  ('smoking', 'interest'),
  ('climbing', 'interest'),
  ('JavaScript', 'skills'),
  ('Node.js', 'skills'),
  ('CSS', 'skills'),
  ('React.js', 'skills'),
  ('HTML', 'skills'),
  ('PostgresSQL', 'skills'),
  ('SQL', 'skills') ;


INSERT INTO user2attribute
  (user_id, attribute_id)
  VALUES
  (1,1),
  (1,4),
  (1,7),
  (1,19),
  (2,1),
  (2,4),
  (2,5),
  (2,22),
  (3,6),
  (3,3),
  (3,9),
  (3,25);

