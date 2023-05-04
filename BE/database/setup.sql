DROP TABLE IF EXISTS diaries;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS token;

CREATE TABLE diaries (
    postId INT GENERATED ALWAYS AS IDENTITY
    title VARCHAR (100) NOT NULL,
    content VARCHAR (100) NOT NULL,
    category VARCHAR (100) NOT NULL,
    postTime TIME,
    postDate DATE,
    mood VARCHAR (100),
    userId INT FOREIGN KEY REFERENCES users(userId),
    PRIMARY KEY (id)
);

INSERT INTO diaries (title, content, category, mood)
VALUES ('First Entry', 'Monday was a good day', 'Good', 'Happy'),
('Second Entry', 'Tuesday was decent', 'Good', 'Happy'),
('Third Entry', 'Wednesday was terrible', 'Bad', 'Sad'),
('Fourth Entry', 'Thursday was not as bad', 'Good', 'Happy');

CREATE TABLE users (
    userId INT GENERATED ALWAYS AS IDENTITY,
    username VARCHAR (50) UNIQUE NOT NULL,
    password CHAR (50) NOT NULL,
    PRIMARY KEY (userId)
);

INSERT INTO users (username, password)
VALUES ('First User', 'pass1'),
('Second User', 'pass2'),
('Third User', 'pass3');

CREATE TABLE token (
    tokenId INT GENERATED ALWAYS AS IDENTITY,
    userId INT NOT NULL,
    token CHAR(36) UNIQUE NOT NULL,
    PRIMARY KEY (tokenId),
    FOREIGN KEY (userId) REFERENCES userS("userId")
);

