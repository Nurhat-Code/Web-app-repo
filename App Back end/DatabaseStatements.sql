CREATE SCHEMA `web-app-db`;

USE `web-app-db`;

CREATE TABLE `web-app-db`.`notes` (
  `note_id` INT NOT NULL AUTO_INCREMENT,
  `step` INT NOT NULL,
  `note` VARCHAR(100) NULL,
  PRIMARY KEY (`note_id`));
  
  
  CREATE TABLE `web-app-db`.`answers` (
  `answer_id` INT NOT NULL,
  `answer` VARCHAR(500) NULL,
  PRIMARY KEY (`answer_id`));
  
INSERT INTO answers (answer_id)
VALUES (1);
INSERT INTO answers (answer_id)
VALUES (2);
INSERT INTO answers (answer_id)
VALUES (3);
INSERT INTO answers (answer_id)
VALUES (4);
INSERT INTO answers (answer_id)
VALUES (5);
INSERT INTO answers (answer_id)
VALUES (6);
INSERT INTO answers (answer_id)
VALUES (7);
INSERT INTO answers (answer_id)
VALUES (8);
INSERT INTO answers (answer_id)
VALUES (9);
INSERT INTO answers (answer_id)
VALUES (10);
INSERT INTO answers (answer_id)
VALUES (11);
INSERT INTO answers (answer_id)
VALUES (12);
INSERT INTO answers (answer_id)
VALUES (13);
INSERT INTO answers (answer_id)
VALUES (14);
INSERT INTO answers (answer_id)
VALUES (15);
INSERT INTO answers (answer_id)
VALUES (16);
INSERT INTO answers (answer_id)
VALUES (17);
INSERT INTO answers (answer_id)
VALUES (18);
INSERT INTO answers (answer_id)
VALUES (19);
INSERT INTO answers (answer_id)
VALUES (20);
