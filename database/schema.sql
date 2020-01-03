-- **NOTE: moved schema commands to database/seed.js

-- DROP DATABASE IF EXISTS ikea;

-- CREATE DATABASE ikea;

-- USE ikea;

-- CREATE TABLE products (
--   id INT NOT NULL,
--   name TEXT NOT NULL,
--   type TEXT NOT NULL,
--   dimensions TEXT,
--   img TEXT NOT NULL,
--   relatedArticle TEXT NOT NULL,
--   PRIMARY KEY (id)
-- );

-- **NOTE: the command below assumes that the products table already exists
-- copy products from '/Users/katherinewang/Hack Reactor/HRLA33/SDC/searchbar-service/database/ikea_seed_pg.csv' delimiter ',';