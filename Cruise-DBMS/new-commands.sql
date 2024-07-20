-- Drop the database if it already exists
DROP DATABASE IF EXISTS cruise_db;

-- Create the database
CREATE DATABASE cruise_db;

-- Use the created database
USE cruise_db;

-- Create Cruises table
CREATE TABLE Cruises (
    cruise_id VARCHAR(255) NOT NULL UNIQUE PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255),
    capacity INT,
    sea_route_details TEXT,
    speed INT,
    operational_status VARCHAR(255)
);

-- Create Passengers table
CREATE TABLE Passengers (
    passenger_id VARCHAR(255) NOT NULL UNIQUE PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    identity_number VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone_number VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    age INT,
    gender VARCHAR(10)
);

-- Create Ports table
CREATE TABLE Sea_routes (
    sea_route_id VARCHAR(255) NOT NULL UNIQUE PRIMARY KEY,
    sea_route_number INT NOT NULL UNIQUE,
    source VARCHAR(255) NOT NULL,
    destination VARCHAR(255) NOT NULL,
    distance DECIMAL(10, 2) NOT NULL,
    travel_time INT,
    ports TEXT,
    fare DECIMAL(10, 2)
);

-- Create Bookings table
CREATE TABLE Bookings (
    booking_id VARCHAR(255) NOT NULL UNIQUE PRIMARY KEY,
    booking_date DATE NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    passenger_id VARCHAR(255),
    cruise_id VARCHAR(255),
    sea_route_id VARCHAR(255),
    berth_number VARCHAR(10),
    status VARCHAR(255),
    FOREIGN KEY (passenger_id) REFERENCES Passengers(passenger_id),
    FOREIGN KEY (cruise_id) REFERENCES Cruises(cruise_id),
    FOREIGN KEY (sea_route_id) REFERENCES Sea_routes(sea_route_id)
);



-- Insert sample data into Cruises table
INSERT INTO Cruises (cruise_id, name, type, capacity, sea_route_details, speed, operational_status)
VALUES 
('C001', 'Caribbean Explorer', 'Luxury', 2000, 'Miami - San Juan - St. Maarten - Barbados', 25, 'Operational'),
('C002', 'Mediterranean Odyssey', 'Standard', 1500, 'Barcelona - Rome - Athens - Istanbul', 22, 'Operational'),
('C003', 'Pacific Adventure', 'Luxury', 2500, 'Sydney - Fiji - Hawaii - San Francisco', 28, 'Operational');

-- Insert sample data into Passengers table
INSERT INTO Passengers (passenger_id, name, identity_number, email, phone_number, address, age, gender)
VALUES 
('P001', 'Alice Johnson', 'ID123456', 'alice.johnson@example.com', '1234567890', '123 Sea St', 30, 'Female'),
('P002', 'Bob Smith', 'ID123457', 'bob.smith@example.com', '1234567891', '124 Sea St', 45, 'Male'),
('P003', 'Charlie Brown', 'ID123458', 'charlie.brown@example.com', '1234567892', '125 Sea St', 35, 'Male');

-- Insert sample data into Sea_routes table
INSERT INTO Sea_routes (sea_route_id, sea_route_number, source, destination, distance, travel_time, ports, fare)
VALUES 
('R001', 101, 'Miami', 'Barbados', 1500.75, 72, 'Miami, San Juan, St. Maarten, Barbados', 1200.00),
('R002', 102, 'Barcelona', 'Istanbul', 2000.50, 96, 'Barcelona, Rome, Athens, Istanbul', 1500.00),
('R003', 103, 'Sydney', 'San Francisco', 8000.00, 168, 'Sydney, Fiji, Hawaii, San Francisco', 2500.00);

-- Insert sample data into Bookings table
INSERT INTO Bookings (booking_id, booking_date, amount, passenger_id, cruise_id, sea_route_id, berth_number, status)
VALUES 
('B001', '2024-01-01', 1000.00, 'P001', 'C001', 'R001', 'A1', 'Confirmed'),
('B002', '2024-02-01', 1200.00, 'P002', 'C002', 'R002', 'B2', 'Confirmed'),
('B003', '2024-03-01', 1500.00, 'P003', 'C003', 'R003', 'C3', 'Cancelled');




-- Select all data from Cruises table
SELECT * FROM Cruises;

-- Select all data from Passengers table
SELECT * FROM Passengers;

-- Select all data from Sea_routes table
SELECT * FROM Sea_routes;

-- Select all data from Bookings table
SELECT * FROM Bookings;
