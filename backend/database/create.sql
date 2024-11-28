create schema mateus;

create table mateus.tasks (
    id serial primary key,
    name varchar(255),
    description text,
    opened timestamp default current_timestamp,
    closed timestamp
)

