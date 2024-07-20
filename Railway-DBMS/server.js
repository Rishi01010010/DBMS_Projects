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
    database: 'railway_db'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Database connected!');
});

// bookings Endpoints
app.get('/api/bookings', (req, res) => {
    const sql = 'SELECT * FROM bookings';
    db.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});

app.get('/api/trains', (req, res) => {
    db.query('SELECT * FROM trains', (error, results) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.json(results);
        }
    });
});

app.get('/api/passengers', (req, res) => {
    db.query('SELECT * FROM passengers', (error, results) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.json(results);
        }
    });
});

app.get('/api/routes', (req, res) => {
    db.query('SELECT * FROM routes', (error, results) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.json(results);
        }
    });
});

app.post('/api/bookings', (req, res) => {
    const booking = req.body;
    const sql = 'INSERT INTO bookings SET ?';
    db.query(sql, booking, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});



// POST endpoint for adding trains
app.post('/api/trains', (req, res) => {
    const train = req.body;
    const sql = 'INSERT INTO trains SET ?';
    db.query(sql, train, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});

// POST endpoint for adding passengers
app.post('/api/passengers', (req, res) => {
    const passenger = req.body;
    const sql = 'INSERT INTO passengers SET ?';
    db.query(sql, passenger, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});

// POST endpoint for adding routes
app.post('/api/routes', (req, res) => {
    const routes = req.body;
    const sql = 'INSERT INTO routes SET ?';
    db.query(sql, routes, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});


// trains Endpoints
app.get('/api/trains/:id', (req, res) => {
    const sql = 'SELECT * FROM trains WHERE train_id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result[0]);
    });
});

app.put('/api/trains/:id', (req, res) => {
    const sql = 'UPDATE trains SET ? WHERE train_id = ?';
    db.query(sql, [req.body, req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});

app.delete('/api/trains/:id', (req, res) => {
    const sql = 'DELETE FROM trains WHERE train_id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});

// passengers Endpoints
app.get('/api/passengers/:id', (req, res) => {
    const sql = 'SELECT * FROM passengers WHERE passenger_id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result[0]);
    });
});

app.put('/api/passengers/:id', (req, res) => {
    const sql = 'UPDATE passengers SET ? WHERE passenger_id = ?';
    db.query(sql, [req.body, req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});

app.delete('/api/passengers/:id', (req, res) => {
    const sql = 'DELETE FROM passengers WHERE passenger_id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});

// route Endpoints
app.get('/api/route/:id', (req, res) => {
    const sql = 'SELECT * FROM routes WHERE route_id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result[0]);
    });
});

app.put('/api/route/:id', (req, res) => {
    const sql = 'UPDATE routes SET ? WHERE route_id = ?';
    db.query(sql, [req.body, req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});

app.delete('/api/route/:id', (req, res) => {
    const sql = 'DELETE FROM routes WHERE route_id = ?';
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


// DELETE endpoint for deleting bookings
app.delete('/api/bookings/:id', (req, res) => {
    const bookingId = req.params.id;

    const sql = 'DELETE FROM bookings WHERE booking_id = ?';
    db.query(sql, [bookingId], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json({ message: 'booking deleted successfully', affectedRows: result.affectedRows });
    });
});
