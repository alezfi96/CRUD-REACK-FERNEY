CREATE DATABASE IF NOT EXISTS  database_app;
USE database_app;



CREATE TABLE  blogs(
    id INT(11) NOT NULL AUTO_INCREMENT ,
    title VARCHAR(100) NOT NULL,
    content VARCHAR (150) NOT  NULL,
    createdAt DATE  ,
    updatedAt DATE ,
    PRIMARY KEY (id)
    
);

INSERT INTO blogs (id, title, content)VALUES 
(1,'Titulo 1','Contenido de mi primer post'),
(2,'Titulo 2','Contenido de mi segindo post'),
(3,'Titulo 3','Contenido de mi tercer post'),
(4,'Titulo 4','Contenido de mi cuarto post'),
(5,'Titulo 5','Contenido de mi quinto post'),
(6,'Titulo 6','Contenido de mi sexto post');

DESCRIBE blogs;