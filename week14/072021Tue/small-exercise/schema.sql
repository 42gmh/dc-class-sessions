create table restaurants (
    id serial primary key,
    name varchar(50) not null,
    distance integer not null,
    stars integer not null,
    category varchar(50) not null,
    favorite_dish varchar(50),
    does_takeout boolean not null,
    last_visit date
);
