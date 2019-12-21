DROP DATABASE IF EXISTS ikea;

CREATE DATABASE ikea;

USE ikea;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  dimensions TEXT
  PRIMARY KEY (id)
);

-- copy products from '/Users/katherinewang/Hack Reactor/HRLA33/SDC/searchbar-service/database/ikea_seed.csv' delimiter ',' csv header;