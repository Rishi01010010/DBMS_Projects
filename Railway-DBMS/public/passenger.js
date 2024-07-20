document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const passengerId = urlParams.get('id');

    fetch(`/api/passengers/${passengerId}`)
        .then(response => response.json())
        .then(data => {
            let details = `<p>Passenger ID: ${data.passenger_id}</p>
                           <p>Name: ${data.name}</p>
                           <p>Identity Number: ${data.identity_number}</p>
                           <p>Email: ${data.email}</p>
                           <p>Phone Number: ${data.phone_number}</p>
                           <p>Address: ${data.address}</p>
                           <p>Age: ${data.age}</p>
                           <p>Gender: ${data.gender}</p>`;
            document.getElementById('passengerDetails').innerHTML = details;
        });
});

function editpassenger() {
    const urlParams = new URLSearchParams(window.location.search);
    const passengerId = urlParams.get('id');
    window.location.href = `/edit-passenger.html?id=${passengerId}`;
}

function deletepassenger() {
    const urlParams = new URLSearchParams(window.location.search);
    const passengerId = urlParams.get('id');

    fetch(`/api/passengers/${passengerId}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        alert('passenger Deleted Successfully');
        window.location.href = '/index.html';
    });
}
