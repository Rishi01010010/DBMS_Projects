document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const cruiseId = urlParams.get('id');

    fetch(`/api/cruises/${cruiseId}`)
        .then(response => response.json())
        .then(data => {
            let details = `<p>cruise ID: ${data.cruise_id}</p>
                           <p>Name: ${data.name}</p>
                           <p>Type: ${data.type}</p>
                           <p>Capacity: ${data.capacity}</p>
                           <p>sea_route Details: ${data.sea_route_details}</p>
                           <p>Speed: ${data.speed}</p>
                           <p>Operational Status: ${data.operational_status}</p>`;
            document.getElementById('cruiseDetails').innerHTML = details;
        });
});

function editcruise() {
    const urlParams = new URLSearchParams(window.location.search);
    const cruiseId = urlParams.get('id');
    window.location.href = `/edit-cruise.html?id=${cruiseId}`;
}

function deletecruise() {
    const urlParams = new URLSearchParams(window.location.search);
    const cruiseId = urlParams.get('id');

    fetch(`/api/cruises/${cruiseId}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        alert('cruise Deleted Successfully');
        window.location.href = '/index.html';
    });
}
