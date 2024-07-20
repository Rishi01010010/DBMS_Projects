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
    database: 'agriculture_db'
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

app.get('/api/farmers', (req, res) => {
    db.query('SELECT * FROM Farmers', (error, results) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.json(results);
        }
    });
});

app.get('/api/buyers', (req, res) => {
    db.query('SELECT * FROM Buyers', (error, results) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.json(results);
        }
    });
});

app.get('/api/lands', (req, res) => {
    db.query('SELECT * FROM Land', (error, results) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.json(results);
        }
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



// POST endpoint for adding farmers
app.post('/api/farmers', (req, res) => {
    const farmer = req.body;
    const sql = 'INSERT INTO Farmers SET ?';
    db.query(sql, farmer, (err, result) => {
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

// POST endpoint for adding lands
app.post('/api/lands', (req, res) => {
    const land = req.body;
    const sql = 'INSERT INTO Land SET ?';
    db.query(sql, land, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});


// Farmers Endpoints
app.get('/api/farmers/:id', (req, res) => {
    const sql = 'SELECT * FROM Farmers WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result[0]);
    });
});

app.put('/api/farmers/:id', (req, res) => {
    const sql = 'UPDATE Farmers SET ? WHERE id = ?';
    db.query(sql, [req.body, req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});

app.delete('/api/farmers/:id', (req, res) => {
    const sql = 'DELETE FROM Farmers WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});

// Buyers Endpoints
app.get('/api/buyers/:id', (req, res) => {
    const sql = 'SELECT * FROM Buyers WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result[0]);
    });
});

app.put('/api/buyers/:id', (req, res) => {
    const sql = 'UPDATE Buyers SET ? WHERE id = ?';
    db.query(sql, [req.body, req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});

app.delete('/api/buyers/:id', (req, res) => {
    const sql = 'DELETE FROM Buyers WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});

// Land Endpoints
app.get('/api/land/:id', (req, res) => {
    const sql = 'SELECT * FROM Land WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result[0]);
    });
});

app.put('/api/land/:id', (req, res) => {
    const sql = 'UPDATE Land SET ? WHERE id = ?';
    db.query(sql, [req.body, req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});

app.delete('/api/land/:id', (req, res) => {
    const sql = 'DELETE FROM Land WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
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
app.delete('/api/transactions/:id', (req, res) => {
    const transactionId = req.params.id;

    const sql = 'DELETE FROM Transactions WHERE id = ?';
    db.query(sql, [transactionId], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json({ message: 'Transaction deleted successfully', affectedRows: result.affectedRows });
    });
});
