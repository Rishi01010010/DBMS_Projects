document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const cruiseId = urlParams.get('id');

    fetch(`/api/cruises/${cruiseId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('cruise_id').value = data.cruise_id;
            document.getElementById('name').value = data.name;
            document.getElementById('type').value = data.type;
            document.getElementById('capacity').value = data.capacity;
            document.getElementById('sea_route_details').value = data.sea_route_details;
            document.getElementById('speed').value = data.speed;
            document.getElementById('operational_status').value = data.operational_status;
        });

    document.getElementById('editForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        fetch(`/api/cruises/${cruiseId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert('cruise Updated Successfully');
            window.location.href = `/cruise.html?id=${cruiseId}`;
        });
    });
});
