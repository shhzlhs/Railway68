DROP DATABASE IF EXISTS ai_trieu_phu_official;
CREATE DATABASE ai_trieu_phu_official;
USE ai_trieu_phu_official;

CREATE TABLE hard_level(
id						TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE questions(
id						BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
content					VARCHAR(1000) NOT NULL,
question_number			TINYINT UNSIGNED,
image					VARCHAR(100) DEFAULT "image0.png"
);

CREATE TABLE answers(
id						BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
content					VARCHAR(1000) NOT NULL,
is_true					VARCHAR(1),
question_id				BIGINT UNSIGNED NOT NULL,
FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE
);

CREATE TABLE question_level(
id						BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
level_id				TINYINT UNSIGNED NOT NULL,
question_id				BIGINT UNSIGNED NOT NULL,
UNIQUE (level_id, question_id),
FOREIGN KEY (level_id) REFERENCES hard_level(id),
FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE
);


CREATE TABLE players(
id						BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
`level`					TINYINT UNSIGNED NOT NULL,
`name`					VARCHAR(200) NOT NULL UNIQUE,
avatar					VARCHAR(100)
);

CREATE TABLE player_score(
id						BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
score					INT DEFAULT 0,
played_at				TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
player_id				BIGINT UNSIGNED NOT NULL,
FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE
);

INSERT INTO hard_level()
VALUES				  (),(),(),(),(),(),(),(),(),(),(),();