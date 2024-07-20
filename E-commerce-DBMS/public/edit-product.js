document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product_id');

    fetch(`/api/product/${productId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('product_id').value = data.product_id;
            document.getElementById('name').value = data.name;
            document.getElementById('price').value = data.price;
            document.getElementById('weight').value = data.weight;
            document.getElementById('category').value = data.category;
            document.getElementById('sellers').value = data.sellers;
            document.getElementById('variants').value = data.variants;
        });

    document.getElementById('editForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        fetch(`/api/product/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert('product Updated Successfully');
            window.location.href = `/product.html?id=${productId}`;
        });
    });
});
