document.addEventListener('DOMContentLoaded', () => {
    fetchTransactions();

    document.getElementById('deleteTransactionForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const transactionId = document.getElementById('deleteTransactionId').value;

        fetch(`/api/transactions/${transactionId}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete transaction');
            }
            return response.json();
        })
        .then(data => {
            alert('Transaction deleted successfully');
            fetchTransactions(); // Refresh the transaction list after deletion
        })
        .catch(error => {
            alert(`Error: ${error.message}`);
        });
    });

    document.getElementById('viewSellers').addEventListener('click', () => {
        fetchSellers();
        document.getElementById('sellersTable').style.display = 'block';
        document.getElementById('buyersTable').style.display = 'none';
        document.getElementById('productsTable').style.display = 'none';
        document.getElementById('transactionsTable').style.display = 'none';
    });

    document.getElementById('viewBuyers').addEventListener('click', () => {
        fetchBuyers();
        document.getElementById('sellersTable').style.display = 'none';
        document.getElementById('buyersTable').style.display = 'block';
        document.getElementById('productsTable').style.display = 'none';
        document.getElementById('transactionsTable').style.display = 'none';
    });

    document.getElementById('viewProducts').addEventListener('click', () => {
        fetchProducts();
        document.getElementById('sellersTable').style.display = 'none';
        document.getElementById('buyersTable').style.display = 'none';
        document.getElementById('productsTable').style.display = 'block';
        document.getElementById('transactionsTable').style.display = 'none';
    });
});

function fetchTransactions() {
    fetch('/api/transactions')
        .then(response => response.json())
        .then(data => {
            let table = '<table>';
            table += '<tr><th>Transaction ID</th><th>Transaction Date</th><th>Amount</th><th>Seller ID</th><th>Buyer ID</th><th>Product ID</th></tr>';
            data.forEach(transaction => {
                table += `<tr>
                            <td>${transaction.transaction_id}</td>
                            <td>${transaction.transaction_date}</td>
                            <td>${transaction.amount}</td>
                            <td><a href="/seller.html?id=${transaction.seller_id}" class="red-link">${transaction.seller_id}</a></td>
                            <td><a href="/buyer.html?id=${transaction.buyer_id}" class="red-link">${transaction.buyer_id}</a></td>
                            <td><a href="/product.html?id=${transaction.product_id}" class="red-link">${transaction.product_id}</a></td>
                          </tr>`;
            });
            table += '</table>';
            document.getElementById('transactionsTable').innerHTML = table;
        })
        .catch(error => {
            console.error('Error fetching transactions:', error);
        });
}

function fetchSellers() {
    fetch('/api/sellers')
        .then(response => response.json())
        .then(data => {
            let table = '<table>';
            table += '<tr><th>Seller ID</th><th>Name</th><th>Email</th><th>Phone Number</th><th>Address</th><th>Stock</th><th>Logistic Expense</th><th>Orders</th></tr>';
            data.forEach(seller => {
                table += `<tr>
                            <td><a href="/seller.html?id=${seller.seller_id}" class="red-link">${seller.seller_id}</a></td>
                            <td>${seller.name}</td>
                            <td>${seller.email}</td>
                            <td>${seller.phone_number}</td>
                            <td>${seller.address}</td>
                            <td>${seller.stock}</td>
                            <td>${seller.logistic_expense}</td>
                            <td>${seller.orders}</td>
                          </tr>`;
            });
            table += '</table>';
            document.getElementById('sellersTable').innerHTML = table;
        })
        .catch(error => {
            console.error('Error fetching sellers:', error);
        });
}

function fetchBuyers() {
    fetch('/api/buyers')
        .then(response => response.json())
        .then(data => {
            let table = '<table>';
            table += '<tr><th>Buyer ID</th><th>Name</th><th>Email</th><th>Phone Number</th><th>Address</th></tr>';
            // <th>Orders</th> // <td>${buyer.orders}</td>
            data.forEach(buyer => {
                table += `<tr>
                            <td><a href="/buyer.html?id=${buyer.buyer_id}" class="red-link">${buyer.buyer_id}</a></td>
                            <td>${buyer.name}</td>
                            <td>${buyer.email}</td>
                            <td>${buyer.phone_number}</td>
                            <td>${buyer.address}</td>
                            
                          </tr>`;
            });
            table += '</table>';
            document.getElementById('buyersTable').innerHTML = table;
        })
        .catch(error => {
            console.error('Error fetching buyers:', error);
        });
}

function fetchProducts() {
    fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            let table = '<table>';
            table += '<tr><th>Product ID</th><th>Name</th><th>Category</th><th>Price</th><th>Variant</th><th>Weight (in Kg)</th><th>Seller ID</th></tr>';
            data.forEach(product => {
                table += `<tr>
                            <td><a href="/product.html?id=${product.product_id}" class="red-link">${product.product_id}</a></td>
                            <td>${product.name}</td>
                            <td>${product.category}</td>
                            <td>${product.price}</td>
                            <td>${product.variants}</td>
                            <td>${product.weight}</td>
                            <td>${product.sellers}</td>
                          </tr>`;
            });
            table += '</table>';
            document.getElementById('productsTable').innerHTML = table;
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
}
