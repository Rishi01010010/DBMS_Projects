document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const farmerId = urlParams.get('id');

    fetch(`/api/Sellers/${farmerId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('name').value = data.name;
            document.getElementById('identity_number').value = data.identity_number;
            document.getElementById('email').value = data.email;
            document.getElementById('phone_number').value = data.phone_number;
            document.getElementById('address').value = data.address;
            document.getElementById('farm_details').value = data.farm_details;
            document.getElementById('production_records').value = data.production_records;
            document.getElementById('equipment_assets').value = data.equipment_assets;
            document.getElementById('product_ownership').value = data.product_ownership;
        });

    document.getElementById('editForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        fetch(`/api/Sellers/${farmerId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert('Farmer Updated Successfully');
            window.location.href = `/farmer.html?id=${farmerId}`;
        });
    });
});
