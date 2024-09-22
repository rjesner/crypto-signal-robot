CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    email VARCHAR(100),
    password VARCHAR(100),
    recovery VARCHAR(100),
    cpf VARCHAR(100),
    address VARCHAR(100),
    telephone VARCHAR(100)
);