-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS noteDB_db;
-- Creates the "animals_db" database --
CREATE DATABASE noteDB_db;

-- Makes it so all of the following code will affect animals_db --
USE noteDB_db;

-- Creates the table "people" within animals_db --
CREATE TABLE notes (
  -- Makes a string column called "name" which cannot contain null --
  note_title VARCHAR(70) NOT NULL,
  -- Makes a boolean column called "has_pet" which cannot contain null --
  note_text VARCHAR(70) NOT NULL,
  -- Makes a sting column called "pet_name" --
  pet_name VARCHAR(30),
 
);

-- Creates new rows containing data in all named columns --
INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Ahmed", TRUE, "Rockington", 100);

INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Ahmed", TRUE, "Rockington", 100);

INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Jacob", TRUE, "Misty", 10);

INSERT INTO people (name, has_pet)
VALUES ("Peter", false);

-- Updates the row where the column name is peter --
UPDATE people
SET has_pet = true, pet_name = "Franklin", pet_age = 2
WHERE name = "Peter";
