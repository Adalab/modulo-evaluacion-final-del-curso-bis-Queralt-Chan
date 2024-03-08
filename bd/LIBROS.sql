CREATE DATABASE libros;
USE libros;
CREATE TABLE libros (
idLibro int not null auto_increment primary key,
nombreLibro varchar (50) not null,
autorLibro varchar (50) not null,
pagesLibro int not null
); 

INSERT INTO libros (nombreLibro,autorLibro,pagesLibro)
VALUES ('Lo que el viento se llevo', 'Margaret Mitchell', 998);

INSERT INTO libros (nombreLibro,autorLibro,pagesLibro)
VALUES 
('El señor de los anillos', 'j.R.R Tolkien', 576),
('Sin noticias de Gurb', 'Eduardo Mendoza', 158),
('Amanecer', 'Stephanie Meyer', 480),
('La teoría del todo', 'Stephen Hawking', 152);

