document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const landId = urlParams.get('id');

    fetch(`/api/land/${landId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('land_number').value = data.land_number;
            document.getElementById('area').value = data.area;
            document.getElementById('location').value = data.location;
            document.getElementById('ownership_status').value = data.ownership_status;
            document.getElementById('farmer_id').value = data.farmer_id;
        });

    document.getElementById('editForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        fetch(`/api/land/${landId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert('Land Updated Successfully');
            window.location.href = `/land.html?id=${landId}`;
        });
    });
});
