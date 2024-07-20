document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const routeId = urlParams.get('id');

    fetch(`/api/route/${routeId}`)
        .then(response => response.json())
        .then(data => {
            let details = `<p>Route ID: ${data.route_id}</p>
                           <p>Route Number: ${data.route_number}</p>
                           <p>Source: ${data.source}</p>
                           <p>Destination: ${data.destination}</p>
                           <p>Distance: ${data.distance}</p>
                           <p>Travel Time: ${data.travel_time}</p>
                           <p>Stops: ${data.stops}</p>
                           <p>Fare: ${data.fare}</p>`;
                           
            document.getElementById('routeDetails').innerHTML = details;
        });
});

function editroute() {
    const urlParams = new URLSearchParams(window.location.search);
    const routeId = urlParams.get('id');
    window.location.href = `/edit-route.html?id=${routeId}`;
}

function deleteroute() {
    const urlParams = new URLSearchParams(window.location.search);
    const routeId = urlParams.get('id');

    fetch(`/api/route/${routeId}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        alert('route Deleted Successfully');
        window.location.href = '/index.html';
    });
}
