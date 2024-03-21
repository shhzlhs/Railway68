DROP DATABASE IF EXISTS vu_duc_chien;
CREATE DATABASE vu_duc_chien;
USE vu_duc_chien;

CREATE TABLE Users(
id				   INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
username		   VARCHAR(30) NOT NULL UNIQUE KEY,
full_name		   VARCHAR(50) NOT NULL,
gender			   VARCHAR(5) NOT NULL,
age				   TINYINT UNSIGNED NOT NULL,
pass			   VARCHAR(1000) NOT NULL,
avatar			   VARCHAR(1000),
user_role		   VARCHAR(5) NOT NULL
);

INSERT INTO Users(username,full_name,gender,age,pass,avatar,user_role)
VALUES			 ("nguoicodon","Trần Ngọc Mai","FM",21,"$2a$12$sUsMHkUtRFl0kGlmI8QRJeNXORzOXh1UR3WbCSVsTAQrnoCnjS1.i","2.jpg","USER"),
				 ("hongbangchu","Hồng Thất Công","M",78,"$2a$12$sUsMHkUtRFl0kGlmI8QRJeNXORzOXh1UR3WbCSVsTAQrnoCnjS1.i","4.jpg","ADMIN"),
				 ("heddfuuuu","Đặng Vũ Như","FM",22,"$2a$12$sUsMHkUtRFl0kGlmI8QRJeNXORzOXh1UR3WbCSVsTAQrnoCnjS1.i","3.jpg","USER"),
				 ("bacchutu","Vũ Văn Uyên","FM",28,"$2a$12$sUsMHkUtRFl0kGlmI8QRJeNXORzOXh1UR3WbCSVsTAQrnoCnjS1.i","5.jpg","USER"),
				 ("ozshhhs","Lê Văn Thị","M",30,"$2a$12$sUsMHkUtRFl0kGlmI8QRJeNXORzOXh1UR3WbCSVsTAQrnoCnjS1.i","6.jpg","USER"),
				 ("abcdeff","Lê Thị Văn","FM",31,"$2a$12$sUsMHkUtRFl0kGlmI8QRJeNXORzOXh1UR3WbCSVsTAQrnoCnjS1.i","7.jpg","USER"),
				 ("sssss1","Lê Mai Lan","FM",19,"$2a$12$sUsMHkUtRFl0kGlmI8QRJeNXORzOXh1UR3WbCSVsTAQrnoCnjS1.i","1.jpg","ADMIN");

CREATE TABLE Posts(
id				   INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
user_id			   INT UNSIGNED NOT NULL,
content			   VARCHAR(5000),
image			   VARCHAR(1000),
created_at 		   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);

INSERT INTO Posts(user_id,content,image)
VALUES			 (1,"Xin chào 500 ae!","post1.jpg");

CREATE TABLE Comments(
id 				   INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
post_id 		   INT UNSIGNED,
reply_to 		   INT UNSIGNED,
user_id 		   INT UNSIGNED NOT NULL,
content 		   VARCHAR(2000) NOT NULL,
created_at		   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (post_id) REFERENCES Posts(id) ON DELETE CASCADE,
FOREIGN KEY (reply_to) REFERENCES Comments(id) ON DELETE CASCADE,
FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);

INSERT INTO Comments(post_id,reply_to,user_id,content)
VALUES				(1,null,5,"Xinh quá xinh quá!"),
					(null,1,1,"Bạn cứ nói thừa!");

CREATE TABLE Likes(
id 				  INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
post_id 		  INT UNSIGNED,
comment_id 		  INT UNSIGNED,
user_id 		  INT UNSIGNED NOT NULL,
created_at 		  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (post_id) REFERENCES Posts(id) ON DELETE CASCADE,
FOREIGN KEY (comment_id) REFERENCES Comments(id) ON DELETE CASCADE,
FOREIGN KEY (user_id) REFERENCES Users(id)ON DELETE CASCADE,
UNIQUE KEY (post_id,user_id),
UNIQUE KEY (comment_id,user_id)
);

INSERT INTO Likes(post_id,comment_id,user_id)
VALUES			 (1,null,1),
				 (1,null,2),
				 (null,2,1);

CREATE TABLE `Follows` (
id 				 INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
follower_id 	 INT UNSIGNED NOT NULL,
be_followed_id 	 INT UNSIGNED NOT NULL,
created_at 		 TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (follower_id) REFERENCES Users(id) ,
FOREIGN KEY (be_followed_id) REFERENCES Users(id),
UNIQUE KEY  (follower_id,be_followed_id)
);

INSERT INTO `Follows`(follower_id ,be_followed_id)
VALUES				 (2,1),
					 (2,3),
					 (3,1),
					 (2,7),
					 (3,7),
					 (3,6),
					 (5,1),
					 (3,2),
					 (4,2),
					 (5,2),
					 (4,5),
					 (2,4);
			

CREATE TABLE Notifications (
   id 			INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
   user_id 		INT UNSIGNED NOT NULL,
   content     	VARCHAR(255) NOT NULL,
   is_read     	VARCHAR(1),
   creator_id   INT UNSIGNED NOT NULL,
   post_id		INT UNSIGNED,
   comment_id	INT UNSIGNED,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
   FOREIGN KEY (creator_id) REFERENCES Users(id) ON DELETE CASCADE,
   FOREIGN KEY (post_id) REFERENCES Posts(id) ON DELETE CASCADE,
   FOREIGN KEY (comment_id) REFERENCES Comments(id) ON DELETE CASCADE
);
INSERT INTO Notifications(user_id,content,is_read,creator_id,post_id,comment_id)
VALUES					 (1,"Lê Mai Lan đã bình luận bài viết của bạn","N",5,1,null);