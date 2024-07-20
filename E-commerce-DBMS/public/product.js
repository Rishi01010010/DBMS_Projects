document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    fetch(`/api/product/${productId}`)
        .then(response => response.json())
        .then(data => {
            let details = `<p>product ID: ${data.product_id}</p>
                            <p>product Name: ${data.name}</p>
                            <p>price: ${data.price}</p>
                           <p>Weight: ${data.weight}</p>
                           <p>Category: ${data.category}</p>
                           <p>Sellers: ${data.sellers}</p>
                           <p>Variants: ${data.variants}</p>`;
            document.getElementById('productDetails').innerHTML = details;
        });
});

function editproduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    window.location.href = `/edit-product.html?product_id=${productId}`;
}

function deleteproduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    fetch(`/api/product/${productId}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        alert('product Deleted Successfully');
        window.location.href = '/index.html';
    });
}
