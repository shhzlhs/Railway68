DROP DATABASE IF EXISTS TestingSystem;
CREATE DATABASE IF NOT EXISTS TestingSystem;
USE TestingSystem;

CREATE TABLE Competition(
id           INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
`name` 		 VARCHAR(30) NOT NULL,
country      VARCHAR(30) NOT NULL,
`level`		 INT UNSIGNED,
logo		 VARCHAR(100),
total_team   INT UNSIGNED
);

CREATE TABLE Team(
id  		 INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
`name`       VARCHAR(30) UNIQUE KEY NOT NULL,
logo		 VARCHAR(100),
created_year INT UNSIGNED,
competition_id INT UNSIGNED NOT NULL,
info         VARCHAR(2000),
FOREIGN KEY (competition_id) REFERENCES Competition(id) ON DELETE CASCADE
);

CREATE TABLE Player(
id			 INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
`name`		 VARCHAR(100) NOT NULL,
avatar		 VARCHAR(100),
nation		 VARCHAR(30),
`position`   ENUM("GK","DF","MF","WF") NOT NULL,  
team_id      INT UNSIGNED,
joined_year  INT UNSIGNED,
info         VARCHAR(2000),
FOREIGN KEY(team_id) REFERENCES Team(id) ON DELETE SET NULL
);

CREATE TABLE `User`(
id			 INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
username     VARCHAR(30) NOT NULL UNIQUE KEY,
`name`		 VARCHAR(30) NOT NULL,
`role`		 ENUM ("ADMIN","USER") DEFAULT("USER"),
`password`   VARCHAR(800) NOT NULL
);

INSERT INTO Competition(`name`				,logo                ,country		,`level`,total_team)
VALUES
					   ("Premier League"	,"Premier League.png","England"		,1		,20		   ),
					   ("La Liga"			,"La Liga.png"		 ,"Spain"		,1		,20		   ),
					   ("Bundesliga"		,"Bundesliga.png"	 ,"Germany"		,1		,18		   ),
                       ("Serie A"			,"Serie A.png"		 ,"Italy"		,1		,20		   ),
                       ("Ligue 1"			,"Ligue 1.png"	 	 ,"France"		,1		,18		   );
                       
  INSERT INTO Team       (`name`				,logo                   ,created_year	,competition_id,info)
  VALUES
 					   ("Manchester United" ,"Manchester United.png",1878			,1			   ,"Manchester United Football Club, commonly referred to as Man United (often stylised as Man Utd), or simply United, is a professional football club based in Old Trafford, Greater Manchester, England. The club competes in the Premier League, the top division in the English football league system. Nicknamed the Red Devils, they were founded as Newton Heath LYR Football Club in 1878, but changed their name to Manchester United in 1902. After a spell playing in Clayton, Manchester, the club moved to their current stadium, Old Trafford, in 1910."		   ),
				   ("Chelsea"			,"Chelsea.png"   		,1905			,1			   ,"Chelsea Football Club is an English professional football club based in Fulham, West London. Founded in 1905, they play their home games at Stamford Bridge. The club competes in the Premier League, the top division of English football. They won their first major honour, the League championship, in 1955. The club won the FA Cup for the first time in 1970, their first European honour, the Cup Winners' Cup, in 1971, and became the third English club to win the Club World Cup in 2022."			   ),
					   ("Real Madrid" 		,"Real Madrid.png"		,1902			,2			   ,"Real Madrid Club de Fútbol, commonly referred to as Real Madrid, is a Spanish professional football club based in Madrid. The club competes in La Liga, the top tier of Spanish football."			   );

                       
 INSERT INTO Player     (`name`				,nation,avatar			,`position`,team_id,joined_year,info)
 VALUES
  					   ("Macus Rashford"    ,"England"		,"player_1.png","WF"	   ,1	   ,2005,"Marcus Rashford MBE (born 31 October 1997) is an English professional footballer who plays as a forward or left winger for Premier League club Manchester United and the England national team."	   ),
					   ("Mason Mount"       ,"England"      ,"player_2.png","MF"	   ,1	   ,2023,"Mason Tony Mount (born 10 January 1999) is an English professional footballer who plays as an attacking or central midfielder for Premier League club Manchester United and the England national team."	   ),
				   ("Tony Kroos"        ,"Germany"      ,"player_3.png","MF"	   ,3	   ,2014,"Toni Kroos (born 4 January 1990) is a German professional footballer who plays as a midfielder for La Liga club Real Madrid. Widely regarded as one of the greatest midfielders of all time, Kroos plays mainly as a central midfielder, but has also been deployed as a deep-lying playmaker in his career. He is known for his vision, passing, creativity, crossing and set-piece ability."	   ),
					   ("Reece James"       ,"England"      ,"player_4.png","DF"	   ,2	   ,2018,"Reece Lewis James (born 8 December 1999) is an English professional footballer who plays as a right-back for Premier League club Chelsea, which he captains, and the England national team."	   );
	-- 		       ("Adama Traoré"      ,"Mali"         ,"MF"	   ,4	   ,2022	   ),
--  					   ("Manuel Neuer"      ,"Germany"      ,"GK"	   ,5	   ,2011	   ),
--  					   ("Olivier Giroud"    ,"France"       ,"WF"	   ,6	   ,2021	   ),
-- 					   ("David Alaba"       ,"Austria"      ,"DF"	   ,3	   ,2021	   ),
-- 					   ("Bruno Fernandes"   ,"Portugal"     ,"MF"	   ,1	   ,2019	   ),
-- 					   ("Raphaël Varane"    ,"France"       ,"DF"	   ,1	   ,2021	   ),
-- 					   ("Lisandro Martínez" ,"Agentina"     ,"DF"	   ,1	   ,2022	   ),
-- 					   ("Joshua Kimmich"    ,"Germany"      ,"MF"	   ,5	   ,2015	   ),
--  					   ("Vinícius Júnior"   ,"Brazil"		,"WF"	   ,3	   ,2018	   );
                       
INSERT INTO `User`     (username            ,`name`                    ,`role`    ,`password`                 )
VALUES             
					   ("shhzlhs"           ,"Lê Hoàng Sơn"            ,"ADMIN"   ,"$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi"),
                       ("vodanhtieutot"     ,"Nguyễn Bình Dân"         ,"USER"    ,"$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi");

