document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const landId = urlParams.get('id');

    fetch(`/api/land/${landId}`)
        .then(response => response.json())
        .then(data => {
            let details = `<p>Land Number: ${data.land_number}</p>
                           <p>Area: ${data.area}</p>
                           <p>Location: ${data.location}</p>
                           <p>Ownership Status: ${data.ownership_status}</p>
                           <p>Farmer ID: ${data.farmer_id}</p>`;
            document.getElementById('landDetails').innerHTML = details;
        });
});

function editLand() {
    const urlParams = new URLSearchParams(window.location.search);
    const landId = urlParams.get('id');
    window.location.href = `/edit-land.html?id=${landId}`;
}

function deleteLand() {
    const urlParams = new URLSearchParams(window.location.search);
    const landId = urlParams.get('id');

    fetch(`/api/land/${landId}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        alert('Land Deleted Successfully');
        window.location.href = '/index.html';
    });
}
