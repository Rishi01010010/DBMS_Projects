-- Create the database
CREATE DATABASE agriculture_db;

-- Use the created database
USE agriculture_db;

-- Create Farmers table
CREATE TABLE Farmers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    identity_number VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone_number VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    farm_details TEXT,
    production_records TEXT,
    equipment_assets TEXT,
    land_ownership TEXT
);

-- Create Buyers tablefarmersfarmersbuyers
CREATE TABLE Buyers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    identity_number VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone_number VARCHAR(255) NOT NULL,
    address VARCHAR(255)
);

-- Create Land table
CREATE TABLE Land (
    id INT AUTO_INCREMENT PRIMARY KEY,
    land_number VARCHAR(255) NOT NULL UNIQUE,
    area DECIMAL(10, 2) NOT NULL,
    location VARCHAR(255) NOT NULL,
    ownership_status VARCHAR(255) NOT NULL,
    farmer_id INT,
    FOREIGN KEY (farmer_id) REFERENCES Farmers(id)
);

-- Create Transactions table
CREATE TABLE Transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    transaction_date DATE NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    farmer_id INT,
    buyer_id INT,
    land_id INT,
    FOREIGN KEY (farmer_id) REFERENCES Farmers(id),
    FOREIGN KEY (buyer_id) REFERENCES Buyers(id),
    FOREIGN KEY (land_id) REFERENCES Land(id)
);

SELECT * FROM Transactions;
SELECT * FROM Land;
SELECT * FROM Buyers;
SELECT * FROM Farmers;