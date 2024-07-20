document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const trainId = urlParams.get('id');

    fetch(`/api/trains/${trainId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('train_id').value = data.train_id;
            document.getElementById('name').value = data.name;
            document.getElementById('type').value = data.type;
            document.getElementById('capacity').value = data.capacity;
            document.getElementById('route_details').value = data.route_details;
            document.getElementById('speed').value = data.speed;
            document.getElementById('operational_status').value = data.operational_status;
        });

    document.getElementById('editForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        fetch(`/api/trains/${trainId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert('train Updated Successfully');
            window.location.href = `/train.html?id=${trainId}`;
        });
    });
});
