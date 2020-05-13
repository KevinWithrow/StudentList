
const createListItemsTableQuery = `create table list_items (
    id serial primary key,
    uuid text unique,
    description text,
    display_order int,
    list_id INTEGER REFERENCES list(id),
    ctime timestamptz,
    mtime timestamptz default current_timestamp
    );`

const dropListItemsQuery =
    `drop table list items;`

exports.up = function(knex) {
    return knex.raw(createListItemsTableQuery)
  
};

exports.down = function(knex) {
    return knex.raw(dropTableQuery)
  
};
