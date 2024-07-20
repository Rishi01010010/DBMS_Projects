document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const routeId = urlParams.get('id');

    fetch(`/api/route/${routeId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('route_id').value = data.route_id;
            document.getElementById('route_number').value = data.route_number;
            document.getElementById('source').value = data.source;
            document.getElementById('destination').value = data.destination;
            document.getElementById('distance').value = data.distance;
            document.getElementById('travel_time').value = data.travel_time;
            document.getElementById('stops').value = data.stops;
            document.getElementById('fare').value = data.fare;
        });

    document.getElementById('editForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        fetch(`/api/route/${routeId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert('route Updated Successfully');
            window.location.href = `/route.html?id=${routeId}`;
        });
    });
});
