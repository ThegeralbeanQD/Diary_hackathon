DROP TABLE IF EXISTS diaries;
DROP TABLE IF EXISTS token;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    username VARCHAR (50) UNIQUE NOT NULL,
    password CHAR (50) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE diaries (
    post_id INT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR (100) NOT NULL,
    content VARCHAR (100) NOT NULL,
    category VARCHAR (100) NOT NULL,
    post_time TIME DEFAULT CURRENT_TIME,
    post_date DATE DEFAULT CURRENT_DATE,
    mood VARCHAR (100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    PRIMARY KEY (post_id)
);

CREATE TABLE token (
    token_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    token CHAR(36) UNIQUE NOT NULL,
    PRIMARY KEY (token_id),
    FOREIGN KEY (user_id) REFERENCES userS(user_id)
);

INSERT INTO diaries (title, content, category, mood)
VALUES ('First Entry', 'Monday was a good day', 'Good', 'Happy'),
('Second Entry', 'Tuesday was decent', 'Good', 'Happy'),
('Third Entry', 'Wednesday was terrible', 'Bad', 'Sad'),
('Fourth Entry', 'Thursday was not as bad', 'Good', 'Happy');

INSERT INTO users (username, password)
VALUES ('First User', 'pass1'),
('Second User', 'pass2'),
('Third User', 'pass3');


