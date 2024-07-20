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


INSERT INTO Farmers (name, identity_number, email, phone_number, address, farm_details, production_records, equipment_assets, land_ownership)
VALUES 
('John Doe', 'ID123456', 'john.doe@example.com', '1234567890', '123 Main St', 'Details about John\'s farm', 'Record 1', 'Equipment 1', 'Ownership 1'),
('Jane Smith', 'ID123457', 'jane.smith@example.com', '1234567891', '124 Main St', 'Details about Jane\'s farm', 'Record 2', 'Equipment 2', 'Ownership 2'),
('Jim Brown', 'ID123458', 'jim.brown@example.com', '1234567892', '125 Main St', 'Details about Jim\'s farm', 'Record 3', 'Equipment 3', 'Ownership 3'),
('Jake White', 'ID123459', 'jake.white@example.com', '1234567893', '126 Main St', 'Details about Jake\'s farm', 'Record 4', 'Equipment 4', 'Ownership 4'),
('Lucy Black', 'ID123460', 'lucy.black@example.com', '1234567894', '127 Main St', 'Details about Lucy\'s farm', 'Record 5', 'Equipment 5', 'Ownership 5'),
('Tom Green', 'ID123461', 'tom.green@example.com', '1234567895', '128 Main St', 'Details about Tom\'s farm', 'Record 6', 'Equipment 6', 'Ownership 6'),
('Emily Blue', 'ID123462', 'emily.blue@example.com', '1234567896', '129 Main St', 'Details about Emily\'s farm', 'Record 7', 'Equipment 7', 'Ownership 7'),
('Robert Grey', 'ID123463', 'robert.grey@example.com', '1234567897', '130 Main St', 'Details about Robert\'s farm', 'Record 8', 'Equipment 8', 'Ownership 8'),
('Nina Purple', 'ID123464', 'nina.purple@example.com', '1234567898', '131 Main St', 'Details about Nina\'s farm', 'Record 9', 'Equipment 9', 'Ownership 9'),
('Oliver Yellow', 'ID123465', 'oliver.yellow@example.com', '1234567899', '132 Main St', 'Details about Oliver\'s farm', 'Record 10', 'Equipment 10', 'Ownership 10');





INSERT INTO Buyers (name, identity_number, email, phone_number, address)
VALUES 
('Alice Brown', 'ID223456', 'alice.brown@example.com', '2234567890', '223 Main St'),
('Charlie Green', 'ID223457', 'charlie.green@example.com', '2234567891', '224 Main St'),
('David White', 'ID223458', 'david.white@example.com', '2234567892', '225 Main St'),
('Ella Black', 'ID223459', 'ella.black@example.com', '2234567893', '226 Main St'),
('Frank Blue', 'ID223460', 'frank.blue@example.com', '2234567894', '227 Main St'),
('Grace Grey', 'ID223461', 'grace.grey@example.com', '2234567895', '228 Main St'),
('Henry Purple', 'ID223462', 'henry.purple@example.com', '2234567896', '229 Main St'),
('Ivy Yellow', 'ID223463', 'ivy.yellow@example.com', '2234567897', '230 Main St'),
('Jack Orange', 'ID223464', 'jack.orange@example.com', '2234567898', '231 Main St'),
('Kathy Pink', 'ID223465', 'kathy.pink@example.com', '2234567899', '232 Main St');



INSERT INTO Land (land_number, area, location, ownership_status, farmer_id)
VALUES 
('LN123', 100.50, 'Location 1', 'Owned', 1),
('LN124', 150.75, 'Location 2', 'Leased', 2),
('LN125', 200.25, 'Location 3', 'Owned', 3),
('LN126', 175.50, 'Location 4', 'Leased', 4),
('LN127', 125.00, 'Location 5', 'Owned', 5),
('LN128', 300.75, 'Location 6', 'Leased', 6),
('LN129', 225.25, 'Location 7', 'Owned', 7),
('LN130', 275.50, 'Location 8', 'Leased', 8),
('LN131', 350.00, 'Location 9', 'Owned', 9),
('LN132', 400.25, 'Location 10', 'Leased', 10);




INSERT INTO Transactions (transaction_date, amount, farmer_id, buyer_id, land_id)
VALUES 
('2024-01-01', 5000.00, 1, 1, 1),
('2024-01-02', 6000.00, 2, 2, 2),
('2024-01-03', 7000.00, 3, 3, 3),
('2024-01-04', 8000.00, 4, 4, 4),
('2024-01-05', 9000.00, 5, 5, 5),
('2024-01-06', 10000.00, 6, 6, 6),
('2024-01-07', 11000.00, 7, 7, 7),
('2024-01-08', 12000.00, 8, 8, 8),
('2024-01-09', 13000.00, 9, 9, 9),
('2024-01-10', 14000.00, 10, 10, 10);
SELECT * FROM Transactions;
SELECT * FROM Land;
SELECT * FROM Buyers;
SELECT * FROM Farmers;