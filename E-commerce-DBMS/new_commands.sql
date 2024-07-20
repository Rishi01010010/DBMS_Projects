DROP DATABASE ecommerce_db;
-- Create the database
CREATE DATABASE Ecommerce_db;

-- Use the created database
USE Ecommerce_db;

-- Create Sellers table
CREATE TABLE Sellers (
    seller_id VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone_number VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    stock DECIMAL(10, 2),
    logistic_expense DECIMAL(10, 2),
    orders DECIMAL(10, 2),
    PRIMARY KEY (seller_id)
);

-- Create Buyers table
CREATE TABLE Buyers (
    buyer_id VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone_number VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    PRIMARY KEY (buyer_id)
);

-- Create Product table
CREATE TABLE Product (
    product_id VARCHAR(255) NOT NULL UNIQUE,
    weight DECIMAL(10, 2) NOT NULL,
    category VARCHAR(255) NOT NULL,
    sellers VARCHAR(255) NOT NULL,
    variants INT,
    PRIMARY KEY (product_id)
);

-- Create Transactions table
CREATE TABLE Transactions (
    transaction_id VARCHAR(255) NOT NULL UNIQUE,
    transaction_date DATE NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    seller_id VARCHAR(255),
    buyer_id VARCHAR(255),
    product_id VARCHAR(255),
    FOREIGN KEY (seller_id) REFERENCES Sellers(seller_id),
    FOREIGN KEY (buyer_id) REFERENCES Buyers(buyer_id),
    FOREIGN KEY (product_id) REFERENCES Product(product_id)
);

INSERT INTO Sellers (seller_id, name, email, phone_number, address, stock, logistic_expense, orders) VALUES
('S001', 'John Doe', 'john.doe@example.com', '123-456-7890', '123 Main St, Cityville', 150.00, 50.00, 20.00),
('S002', 'Jane Smith', 'jane.smith@example.com', '234-567-8901', '456 Elm St, Townsville', 200.00, 60.00, 25.00),
('S003', 'Alice Johnson', 'alice.johnson@example.com', '345-678-9012', '789 Oak St, Villageville', 180.00, 70.00, 30.00),
('S004', 'Bob Brown', 'bob.brown@example.com', '456-789-0123', '321 Pine St, Hamletville', 220.00, 80.00, 35.00),
('S005', 'Charlie Davis', 'charlie.davis@example.com', '567-890-1234', '654 Maple St, Metropolis', 170.00, 55.00, 28.00);

INSERT INTO Buyers (buyer_id, name, email, phone_number, address) VALUES
('B001', 'David Wilson', 'david.wilson@example.com', '678-901-2345', '987 Birch St, Cityville'),
('B002', 'Emma White', 'emma.white@example.com', '789-012-3456', '123 Cedar St, Townsville'),
('B003', 'Frank Thomas', 'frank.thomas@example.com', '890-123-4567', '456 Redwood St, Villageville'),
('B004', 'Grace Lee', 'grace.lee@example.com', '901-234-5678', '789 Willow St, Hamletville'),
('B005', 'Hannah Martin', 'hannah.martin@example.com', '012-345-6789', '321 Spruce St, Metropolis');

INSERT INTO Product (product_id, weight, category, sellers, variants) VALUES
('P001', 1.5, 'Electronics', 'S001', 3),
('P002', 0.5, 'Books', 'S002', 2),
('P003', 2.0, 'Clothing', 'S003', 4),
('P004', 1.0, 'Toys', 'S004', 5),
('P005', 3.0, 'Furniture', 'S005', 1);

INSERT INTO Transactions (transaction_id, transaction_date, amount, seller_id, buyer_id, product_id) VALUES
('T001', '2024-07-01', 150.00, 'S001', 'B001', 'P001'),
('T002', '2024-07-02', 60.00, 'S002', 'B002', 'P002'),
('T003', '2024-07-03', 80.00, 'S003', 'B003', 'P003'),
('T004', '2024-07-04', 90.00, 'S004', 'B004', 'P004'),
('T005', '2024-07-05', 200.00, 'S005', 'B005', 'P005');


-- Sample SELECT statements to retrieve data from the tables
SELECT * FROM Transactions;
SELECT * FROM product;
SELECT * FROM Buyers;
SELECT * FROM Sellers;