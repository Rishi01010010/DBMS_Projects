document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const sea_routeId = urlParams.get('id');

    fetch(`/api/sea_route/${sea_routeId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('sea_route_id').value = data.sea_route_id;
            document.getElementById('sea_route_number').value = data.sea_route_number;
            document.getElementById('source').value = data.source;
            document.getElementById('destination').value = data.destination;
            document.getElementById('distance').value = data.distance;
            document.getElementById('travel_time').value = data.travel_time;
            document.getElementById('ports').value = data.ports;
            document.getElementById('fare').value = data.fare;
        });

    document.getElementById('editForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        fetch(`/api/sea_route/${sea_routeId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert('sea_route Updated Successfully');
            window.location.href = `/sea_route.html?id=${sea_routeId}`;
        });
    });
});
