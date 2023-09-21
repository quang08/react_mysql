create database react_mysql;

use react_mysql;

create table tutorials (
    id integer primary key auto_increment,
    title varchar(255) not null,
    description text not null,
    published boolean not null,
    created timestamp not null default now()
);

insert into tutorials (title, description) values ('first tut', 'Hello'), ('second tut', 'World');