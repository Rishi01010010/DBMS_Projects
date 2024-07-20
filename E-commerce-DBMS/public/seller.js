document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const sellerId = urlParams.get('id');

    fetch(`/api/Sellers/${sellerId}`)
        .then(response => response.json())
        .then(data => {
            let details = `<p>Seller ID: ${data.seller_id}</p>
                           <p>Name: ${data.name}</p>
                           <p>Email: ${data.email}</p>
                           <p>Phone Number: ${data.phone_number}</p>
                           <p>Address: ${data.address}</p>
                           <p>Stock Details: ${data.stock}</p>
                           <p>Logistic Expenses: ${data.logistic_expense}</p>
                           
                           <p>Orders: ${data.orders}</p>`;
            document.getElementById('sellerDetails').innerHTML = details;
        });
});

function editSeller() {
    const urlParams = new URLSearchParams(window.location.search);
    const sellerId = urlParams.get('id');
    window.location.href = `/edit-seller.html?id=${sellerId}`;
}

function deleteSeller() {
    const urlParams = new URLSearchParams(window.location.search);
    const sellerId = urlParams.get('id');

    fetch(`/api/Sellers/${sellerId}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        alert('Seller Deleted Successfully');
        window.location.href = '/index.html';
    });
}
