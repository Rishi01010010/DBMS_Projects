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
        document.getElementById('cruisesTable').style.display = 'none';
        document.getElementById('passengersTable').style.display = 'none';
        document.getElementById('sea_routesTable').style.display = 'none';
    });

    document.getElementById('viewcruises').addEventListener('click', () => {
        fetchcruises();
        document.getElementById('bookingsTable').style.display = 'none';
        document.getElementById('cruisesTable').style.display = 'block';
        document.getElementById('passengersTable').style.display = 'none';
        document.getElementById('sea_routesTable').style.display = 'none';
    });

    document.getElementById('viewpassengers').addEventListener('click', () => {
        fetchpassengers();
        document.getElementById('bookingsTable').style.display = 'none';
        document.getElementById('cruisesTable').style.display = 'none';
        document.getElementById('passengersTable').style.display = 'block';
        document.getElementById('sea_routesTable').style.display = 'none';
    });

    document.getElementById('viewsea_routes').addEventListener('click', () => {
        fetchsea_routes();
        document.getElementById('bookingsTable').style.display = 'none';
        document.getElementById('cruisesTable').style.display = 'none';
        document.getElementById('passengersTable').style.display = 'none';
        document.getElementById('sea_routesTable').style.display = 'block';
    });
});

function fetchbookings() {
    fetch('/api/bookings')
        .then(response => response.json())
        .then(data => {
            let table = '<table>';
            table += '<tr><th>Booking ID</th><th>booking Date</th><th>Amount</th><th>passenger ID</th><th>cruise ID</th><th>sea_route ID</th><th>berth Number</th><th>Status</th></tr>';
            data.forEach(booking => {
                table += `<tr>
                            <td>${booking.booking_id}</td>
                            <td>${booking.booking_date}</td>
                            <td>${booking.amount}</td>
                            <td><a href="/passenger.html?id=${booking.passenger_id}">${booking.passenger_id}</a></td>
                            <td><a href="/cruise.html?id=${booking.cruise_id}">${booking.cruise_id}</a></td>
                            <td><a href="/sea_route.html?id=${booking.sea_route_id}">${booking.sea_route_id}</a></td>
                            <td>${booking.berth_number}</td>
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

function fetchcruises() {
    fetch('/api/cruises')
        .then(response => response.json())
        .then(data => {
            let table = '<table>';
            table += '<tr><th>cruise ID</th><th>Name</th><th>Type</th><th>Capacity</th><th>sea_route Details</th><th>Speed</th><th>Operational Status</th></tr>';
            data.forEach(cruise => {
                table += `<tr>
                            <td><a href="/cruise.html?id=${cruise.cruise_id}">${cruise.cruise_id}</a></td>
                            <td>${cruise.name}</td>
                            <td>${cruise.type}</td>
                            <td>${cruise.capacity}</td>
                            <td>${cruise.sea_route_details}</td>
                            <td>${cruise.speed}</td>
                            <td>${cruise.operational_status}</td>
                          </tr>`;
            });
            table += '</table>';
            document.getElementById('cruisesTable').innerHTML = table;
        })
        .catch(error => {
            console.error('Error fetching cruises:', error);
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

function fetchsea_routes() {
    fetch('/api/sea_routes')
        .then(response => response.json())
        .then(data => {
            let table = '<table>';
            table += '<tr><th>sea_route ID</th><th>sea_route Number</th><th>Source</th><th>Destination</th><th>Distance</th><th>Travel Time</th><th>ports</th><th>Fare</th></tr>';
            data.forEach(sea_route => {
                table += `<tr>
                            <td><a href="/sea_route.html?id=${sea_route.sea_route_id}">${sea_route.sea_route_id}</a></td>
                            <td>${sea_route.sea_route_number}</td>
                            <td>${sea_route.source}</td>
                            <td>${sea_route.destination}</td>
                            <td>${sea_route.distance}</td>
                            <td>${sea_route.travel_time}</td>
                            <td>${sea_route.ports}</td>
                            <td>${sea_route.fare}</td>
                          </tr>`;
            });
            table += '</table>';
            document.getElementById('sea_routesTable').innerHTML = table;
        })
        .catch(error => {
            console.error('Error fetching sea_routes:', error);
        });
}
