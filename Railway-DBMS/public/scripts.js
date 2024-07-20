document.addEventListener('DOMContentLoaded', () => {
    fetchbookings();

    document.getElementById('deletebookingForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const bookingId = document.getElementById('deletebookingId').value;

        fetch(`/api/bookings/${bookingId}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete booking');
            }
            return response.json();
        })
        .then(data => {
            alert('booking deleted successfully');
            fetchbookings(); // Refresh the booking list after deletion
        })
        .catch(error => {
            alert(`Error: ${error.message}`);
        });
    });

    document.getElementById('viewbookings').addEventListener('click', () => {
        fetchbookings();
        document.getElementById('bookingsTable').style.display = 'block';
        document.getElementById('trainsTable').style.display = 'none';
        document.getElementById('passengersTable').style.display = 'none';
        document.getElementById('routesTable').style.display = 'none';
    });

    document.getElementById('viewtrains').addEventListener('click', () => {
        fetchtrains();
        document.getElementById('bookingsTable').style.display = 'none';
        document.getElementById('trainsTable').style.display = 'block';
        document.getElementById('passengersTable').style.display = 'none';
        document.getElementById('routesTable').style.display = 'none';
    });

    document.getElementById('viewpassengers').addEventListener('click', () => {
        fetchpassengers();
        document.getElementById('bookingsTable').style.display = 'none';
        document.getElementById('trainsTable').style.display = 'none';
        document.getElementById('passengersTable').style.display = 'block';
        document.getElementById('routesTable').style.display = 'none';
    });

    document.getElementById('viewroutes').addEventListener('click', () => {
        fetchroutes();
        document.getElementById('bookingsTable').style.display = 'none';
        document.getElementById('trainsTable').style.display = 'none';
        document.getElementById('passengersTable').style.display = 'none';
        document.getElementById('routesTable').style.display = 'block';
    });
});

function fetchbookings() {
    fetch('/api/bookings')
        .then(response => response.json())
        .then(data => {
            let table = '<table>';
            table += '<tr><th>Booking ID</th><th>booking Date</th><th>Amount</th><th>passenger ID</th><th>train ID</th><th>route ID</th><th>Seat Number</th><th>Status</th></tr>';
            data.forEach(booking => {
                table += `<tr>
                            <td>${booking.booking_id}</td>
                            <td>${booking.booking_date}</td>
                            <td>${booking.amount}</td>
                            <td><a href="/passenger.html?id=${booking.passenger_id}">${booking.passenger_id}</a></td>
                            <td><a href="/train.html?id=${booking.train_id}">${booking.train_id}</a></td>
                            <td><a href="/route.html?id=${booking.route_id}">${booking.route_id}</a></td>
                            <td>${booking.seat_number}</td>
                            <td>${booking.status}</td>
                          </tr>`;
            });
            table += '</table>';
            document.getElementById('bookingsTable').innerHTML = table;
        })
        .catch(error => {
            console.error('Error fetching bookings:', error);
        });
}

function fetchtrains() {
    fetch('/api/trains')
        .then(response => response.json())
        .then(data => {
            let table = '<table>';
            table += '<tr><th>Train ID</th><th>Name</th><th>Type</th><th>Capacity</th><th>Route Details</th><th>Speed</th><th>Operational Status</th></tr>';
            data.forEach(train => {
                table += `<tr>
                            <td><a href="/train.html?id=${train.train_id}">${train.train_id}</a></td>
                            <td>${train.name}</td>
                            <td>${train.type}</td>
                            <td>${train.capacity}</td>
                            <td>${train.route_details}</td>
                            <td>${train.speed}</td>
                            <td>${train.operational_status}</td>
                          </tr>`;
            });
            table += '</table>';
            document.getElementById('trainsTable').innerHTML = table;
        })
        .catch(error => {
            console.error('Error fetching trains:', error);
        });
}

function fetchpassengers() {
    fetch('/api/passengers')
        .then(response => response.json())
        .then(data => {
            let table = '<table>';
            table += '<tr><th>Passenger ID</th><th>Name</th><th>Identity Number</th><th>Email</th><th>Phone Number</th><th>Address</th><th>Age</th><th>Gender</th></tr>';
            data.forEach(passenger => {
                table += `<tr>
                            <td><a href="/passenger.html?id=${passenger.passenger_id}">${passenger.passenger_id}</a></td>
                            <td>${passenger.name}</td>
                            <td>${passenger.identity_number}</td>
                            <td>${passenger.email}</td>
                            <td>${passenger.phone_number}</td>
                            <td>${passenger.address}</td>
                            <td>${passenger.age}</td>
                            <td>${passenger.gender}</td>
                          </tr>`;
            });
            table += '</table>';
            document.getElementById('passengersTable').innerHTML = table;
        })
        .catch(error => {
            console.error('Error fetching passengers:', error);
        });
}

function fetchroutes() {
    fetch('/api/routes')
        .then(response => response.json())
        .then(data => {
            let table = '<table>';
            table += '<tr><th>Route ID</th><th>Route Number</th><th>Source</th><th>Destination</th><th>Distance</th><th>Travel Time</th><th>Stops</th><th>Fare</th></tr>';
            data.forEach(route => {
                table += `<tr>
                            <td><a href="/route.html?id=${route.route_id}">${route.route_id}</a></td>
                            <td>${route.route_number}</td>
                            <td>${route.source}</td>
                            <td>${route.destination}</td>
                            <td>${route.distance}</td>
                            <td>${route.travel_time}</td>
                            <td>${route.stops}</td>
                            <td>${route.fare}</td>
                          </tr>`;
            });
            table += '</table>';
            document.getElementById('routesTable').innerHTML = table;
        })
        .catch(error => {
            console.error('Error fetching routes:', error);
        });
}
