document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const sea_routeId = urlParams.get('id');

    fetch(`/api/sea_route/${sea_routeId}`)
        .then(response => response.json())
        .then(data => {
            let details = `<p>sea_route ID: ${data.sea_route_id}</p>
                           <p>sea_route Number: ${data.sea_route_number}</p>
                           <p>Source: ${data.source}</p>
                           <p>Destination: ${data.destination}</p>
                           <p>Distance: ${data.distance}</p>
                           <p>Travel Time: ${data.travel_time}</p>
                           <p>ports: ${data.ports}</p>
                           <p>Fare: ${data.fare}</p>`;
                           
            document.getElementById('sea_routeDetails').innerHTML = details;
        });
});

function editsea_route() {
    const urlParams = new URLSearchParams(window.location.search);
    const sea_routeId = urlParams.get('id');
    window.location.href = `/edit-sea_route.html?id=${sea_routeId}`;
}

function deletesea_route() {
    const urlParams = new URLSearchParams(window.location.search);
    const sea_routeId = urlParams.get('id');

    fetch(`/api/sea_route/${sea_routeId}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        alert('sea_route Deleted Successfully');
        window.location.href = '/index.html';
    });
}
