USE juchelin-guide-database;

CREATE TABLE users (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);

INSERT INTO users (username, email, password) VALUES ('admin', 'algorithm123@naver.com', '123');
INSERT INTO users (username, email, password) VALUES ('ahnjh', 'algorithm123@naver.com', '123');
