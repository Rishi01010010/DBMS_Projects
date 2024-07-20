const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '$Rr01010010',
    database: 'ecommerce_db'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Database connected!');
});

// Transactions Endpoints
app.get('/api/transactions', (req, res) => {
    const sql = 'SELECT * FROM Transactions';
    db.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});

// Fetch all sellers
app.get('/api/sellers', (req, res) => {
    const query = 'SELECT * FROM Sellers';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching sellers:', err);
            res.status(500).send('Error fetching sellers');
            return;
        }
        res.json(results);
    });
});

// Fetch all buyers
app.get('/api/buyers', (req, res) => {
    const query = 'SELECT * FROM Buyers';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching buyers:', err);
            res.status(500).send('Error fetching buyers');
            return;
        }
        res.json(results);
    });
});

// Fetch all products
app.get('/api/products', (req, res) => {
    const query = 'SELECT * FROM Product';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching products:', err);
            res.status(500).send('Error fetching products');
            return;
        }
        res.json(results);
    });
});

app.post('/api/transactions', (req, res) => {
    const transaction = req.body;
    const sql = 'INSERT INTO Transactions SET ?';
    db.query(sql, transaction, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});



// POST endpoint for adding Sellers
app.post('/api/Sellers', (req, res) => {
    const seller = req.body;
    const sql = 'INSERT INTO Sellers SET ?';
    db.query(sql, seller, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});

// POST endpoint for adding buyers
app.post('/api/buyers', (req, res) => {
    const buyer = req.body;
    const sql = 'INSERT INTO Buyers SET ?';
    db.query(sql, buyer, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});

// POST endpoint for adding products
app.post('/api/products', (req, res) => {
    const product = req.body;
    const sql = 'INSERT INTO product SET ?';
    db.query(sql, product, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});


// Sellers Endpoints
app.get('/api/Sellers/:seller_id', (req, res) => {
    const sql = 'SELECT * FROM Sellers WHERE seller_id = ?';
    db.query(sql, [req.params.seller_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result[0]);
    });
});


app.put('/api/Sellers/:seller_id', (req, res) => {
    const sql = 'UPDATE Sellers SET ? WHERE seller_id = ?';
    db.query(sql, [req.body, req.params.seller_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});

app.delete('/api/Sellers/:seller_id', (req, res) => {
    const sql = 'DELETE FROM Sellers WHERE seller_id = ?';
    db.query(sql, [req.params.seller_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});

// Buyers Endpoints
app.get('/api/buyers/:buyer_id', (req, res) => {
    const sql = 'SELECT * FROM Buyers WHERE buyer_id = ?';
    db.query(sql, [req.params.buyer_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result[0]);
    });
});

app.put('/api/buyers/:buyer_id', (req, res) => {
    const sql = 'UPDATE Buyers SET ? WHERE buyer_id = ?';
    db.query(sql, [req.body, req.params.buyer_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});

app.delete('/api/buyers/:buyer_id', (req, res) => {
    const sql = 'DELETE FROM Buyers WHERE buyer_id = ?';
    db.query(sql, [req.params.buyer_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});

// product Endpoints
app.get('/api/product/:product_id', (req, res) => {
    const sql = 'SELECT * FROM product WHERE product_id = ?';
    db.query(sql, [req.params.product_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result[0]);
    });
});

app.put('/api/product/:product_id', (req, res) => {
    const sql = 'UPDATE product SET ? WHERE product_id = ?';
    db.query(sql, [req.body, req.params.product_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});

app.delete('/api/product/:product_id', (req, res) => {
    const sql = 'DELETE FROM product WHERE product_id = ?';
    db.query(sql, [req.params.product_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


// DELETE endpoint for deleting transactions
app.delete('/api/transactions/:transaction_id', (req, res) => {
    const transactionId = req.params.transaction_id;

    const sql = 'DELETE FROM Transactions WHERE transaction_id = ?';
    db.query(sql, [transactionId], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json({ message: 'Transaction deleted successfully', affectedRows: result.affectedRows });
    });
});
