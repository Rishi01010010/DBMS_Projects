document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const trainId = urlParams.get('id');

    fetch(`/api/trains/${trainId}`)
        .then(response => response.json())
        .then(data => {
            let details = `<p>Train ID: ${data.train_id}</p>
                           <p>Name: ${data.name}</p>
                           <p>Type: ${data.type}</p>
                           <p>Capacity: ${data.capacity}</p>
                           <p>Route Details: ${data.route_details}</p>
                           <p>Speed: ${data.speed}</p>
                           <p>Operational Status: ${data.operational_status}</p>`;
            document.getElementById('trainDetails').innerHTML = details;
        });
});

function edittrain() {
    const urlParams = new URLSearchParams(window.location.search);
    const trainId = urlParams.get('id');
    window.location.href = `/edit-train.html?id=${trainId}`;
}

function deletetrain() {
    const urlParams = new URLSearchParams(window.location.search);
    const trainId = urlParams.get('id');

    fetch(`/api/trains/${trainId}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        alert('train Deleted Successfully');
        window.location.href = '/index.html';
    });
}
