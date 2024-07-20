document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const sellerId = urlParams.get('id');

    fetch(`/api/Sellers/${sellerId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('seller_id').value = data.seller_id;
            document.getElementById('name').value = data.name;
            document.getElementById('email').value = data.email;
            document.getElementById('phone_number').value = data.phone_number;
            document.getElementById('address').value = data.address;
            document.getElementById('stock').value = data.stock;
            document.getElementById('logistic_expense').value = data.logistic_expense;
            document.getElementById('orders').value = data.orders;
        });

    document.getElementById('editForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        fetch(`/api/Sellers/${sellerId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert('Seller Updated Successfully');
            window.location.href = `/seller.html?id=${sellerId}`;
        });
    });
});
