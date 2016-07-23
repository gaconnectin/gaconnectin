DELETE FROM users ;
DELETE FROM attributes ;
DELETE FROM user2attribute ;
DELETE FROM invitations ;


INSERT INTO users
  (password_digest, username, display_name, slack)
  VALUES
  ('password',' Aaron A','Aaron Aaronson', 'a_son'),
  ('password','John D','John Darby', 'git_kong'),
  ('password','Jeff M','Jeffrey Mugsworth', 'git_the_gawd'),
  ('password','Rubi L','Rubi Lenowitz', 'dolphinecutie'),
  ('password','Jax S','Jackson Shaw', 'texas_raider'),
  ('password','Jessica M','Jessica Martinez', 'flower_power_girl');

INSERT INTO invitations
  (invitation_token)
  VALUES
  ('guest'),
  ('test1'),
  ('test2'),
  ('test3') ;


INSERT INTO attributes
  (attr_name, attr_name_lower, attr_type)
  VALUES
  ('comic books', 'comic books', 'interest'),
  ('social drinking', 'social drinking', 'interest'),
  ('horse back riding', 'horse back riding', 'interest'),
  ('biking', 'biking',  'interest'),
  ('movies', 'movies', 'interest'),
  ('swimming','swimming', 'interest'),
  ('hiking', 'hiking', 'interest'),
  ('foodie', 'foodie', 'interest'),
  ('video games', 'video games', 'interest'),
  ('Pokemon', 'pokemon', 'interest'),
  ('cross training', 'cross training', 'interest'),
  ('running', 'running', 'interest'),
  ('walk', 'walk', 'interest'),
  ('chess','chess',  'interest'),
  ('gardening','gardening', 'interest'),
  ('cat lover', 'cat lover','interest'),
  ('smoking','smoking',  'interest'),
  ('climbing', 'climbing', 'interest'),
  ('JavaScript','javaScript',  'skills'),
  ('Node.js', 'node.js', 'skills'),
  ('CSS', 'css', 'skills'),
  ('React.js', 'react.js', 'skills'),
  ('HTML', 'html', 'skills'),
  ('PostgresSQL', 'postgressql', 'skills'),
  ('SQL', 'sql','skills') ;


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
  (3,25),
  (4,25),
  (4,1),
  (4,4),
  (4,3),
  (4,22),
  (5,1),
  (5,4),
  (5,7),
  (5,19),
  (5,22),
  (6,6),
  (6,3),
  (6,9),
  (6,25) ;
