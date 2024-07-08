INSERT INTO deaprtments(name)
VALUES('Computer engineering'),
      ("Marketing and Sales Department"),
      ("Human Resources"),
      ("Finance Department"),
      ("Customer Service"),
      ("Engineering"),
      ("Risk Management"),
      ("Protective Services"),
      ("Finance Department"),
      ('Web Development');


INSERT INTO roles( title, salary, department_id)
VALUE("Accountant", 9000, 001);

INSERT INTO employees(first_name, last_name, manager_id, role_id) 
VALUES ('Kim', 'Tan', NULL, 001),
       ('Han', 'Cohen', NULL, 002),
       ('Emily', 'Johnson', NULL, 003),
       ('Lance', 'Dorji', NULL, 003);
