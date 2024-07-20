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

    document.getElementById('viewTransactions').addEventListener('click', () => {
        fetchTransactions();
        document.getElementById('transactionsTable').style.display = 'block';
        document.getElementById('farmersTable').style.display = 'none';
        document.getElementById('buyersTable').style.display = 'none';
        document.getElementById('landsTable').style.display = 'none';
    });

    document.getElementById('viewFarmers').addEventListener('click', () => {
        fetchFarmers();
        document.getElementById('transactionsTable').style.display = 'none';
        document.getElementById('farmersTable').style.display = 'block';
        document.getElementById('buyersTable').style.display = 'none';
        document.getElementById('landsTable').style.display = 'none';
    });

    document.getElementById('viewBuyers').addEventListener('click', () => {
        fetchBuyers();
        document.getElementById('transactionsTable').style.display = 'none';
        document.getElementById('farmersTable').style.display = 'none';
        document.getElementById('buyersTable').style.display = 'block';
        document.getElementById('landsTable').style.display = 'none';
    });

    document.getElementById('viewLands').addEventListener('click', () => {
        fetchLands();
        document.getElementById('transactionsTable').style.display = 'none';
        document.getElementById('farmersTable').style.display = 'none';
        document.getElementById('buyersTable').style.display = 'none';
        document.getElementById('landsTable').style.display = 'block';
    });
});

function fetchTransactions() {
    fetch('/api/transactions')
        .then(response => response.json())
        .then(data => {
            let table = '<table>';
            table += '<tr><th>ID</th><th>Transaction Date</th><th>Amount</th><th>Farmer ID</th><th>Buyer ID</th><th>Land ID</th></tr>';
            data.forEach(transaction => {
                table += `<tr>
                            <td>${transaction.id}</td>
                            <td>${transaction.transaction_date}</td>
                            <td>${transaction.amount}</td>
                            <td><a href="/farmer.html?id=${transaction.farmer_id}">${transaction.farmer_id}</a></td>
                            <td><a href="/buyer.html?id=${transaction.buyer_id}">${transaction.buyer_id}</a></td>
                            <td><a href="/land.html?id=${transaction.land_id}">${transaction.land_id}</a></td>
                          </tr>`;
            });
            table += '</table>';
            document.getElementById('transactionsTable').innerHTML = table;
        })
        .catch(error => {
            console.error('Error fetching transactions:', error);
        });
}

function fetchFarmers() {
    fetch('/api/farmers')
        .then(response => response.json())
        .then(data => {
            let table = '<table>';
            table += '<tr><th>ID</th><th>Name</th><th>Phone</th><th>Email</th></tr>';
            data.forEach(farmer => {
                table += `<tr>
                            <td><a href="/farmer.html?id=${farmer.id}">${farmer.id}</a></td>
                            <td>${farmer.name}</td>
                            <td>${farmer.phone_number}</td>
                            <td>${farmer.email}</td>
                          </tr>`;
            });
            table += '</table>';
            document.getElementById('farmersTable').innerHTML = table;
        })
        .catch(error => {
            console.error('Error fetching farmers:', error);
        });
}

function fetchBuyers() {
    fetch('/api/buyers')
        .then(response => response.json())
        .then(data => {
            let table = '<table>';
            table += '<tr><th>ID</th><th>Name</th><th>Phone</th><th>Email</th></tr>';
            data.forEach(buyer => {
                table += `<tr>
                            <td><a href="/buyer.html?id=${buyer.id}">${buyer.id}</a></td>
                            <td>${buyer.name}</td>
                            <td>${buyer.phone_number}</td>
                            <td>${buyer.email}</td>
                          </tr>`;
            });
            table += '</table>';
            document.getElementById('buyersTable').innerHTML = table;
        })
        .catch(error => {
            console.error('Error fetching buyers:', error);
        });
}

function fetchLands() {
    fetch('/api/lands')
        .then(response => response.json())
        .then(data => {
            let table = '<table>';
            table += '<tr><th>ID</th><th>Location</th><th>Size</th><th>Owner ID</th></tr>';
            data.forEach(land => {
                table += `<tr>
                            <td><a href="/land.html?id=${land.id}">${land.id}</a></td>
                            <td>${land.location}</td>
                            <td>${land.area}</td>
                            <td>${land.farmer_id}</td>
                          </tr>`;
            });
            table += '</table>';
            document.getElementById('landsTable').innerHTML = table;
        })
        .catch(error => {
            console.error('Error fetching lands:', error);
        });
}
