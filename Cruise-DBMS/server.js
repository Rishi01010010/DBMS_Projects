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
    database: 'cruise_db'
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

app.get('/api/cruises', (req, res) => {
    db.query('SELECT * FROM cruises', (error, results) => {
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

app.get('/api/sea_routes', (req, res) => {
    db.query('SELECT * FROM sea_routes', (error, results) => {
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



// POST endpoint for adding cruises
app.post('/api/cruises', (req, res) => {
    const cruise = req.body;
    const sql = 'INSERT INTO cruises SET ?';
    db.query(sql, cruise, (err, result) => {
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

// POST endpoint for adding sea_routes
app.post('/api/sea_routes', (req, res) => {
    const sea_routes = req.body;
    const sql = 'INSERT INTO sea_routes SET ?';
    db.query(sql, sea_routes, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});


// cruises Endpoints
app.get('/api/cruises/:id', (req, res) => {
    const sql = 'SELECT * FROM cruises WHERE cruise_id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result[0]);
    });
});

app.put('/api/cruises/:id', (req, res) => {
    const sql = 'UPDATE cruises SET ? WHERE cruise_id = ?';
    db.query(sql, [req.body, req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});

app.delete('/api/cruises/:id', (req, res) => {
    const sql = 'DELETE FROM cruises WHERE cruise_id = ?';
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

// sea_route Endpoints
app.get('/api/sea_route/:id', (req, res) => {
    const sql = 'SELECT * FROM sea_routes WHERE sea_route_id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result[0]);
    });
});

app.put('/api/sea_route/:id', (req, res) => {
    const sql = 'UPDATE sea_routes SET ? WHERE sea_route_id = ?';
    db.query(sql, [req.body, req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error');
        }
        res.json(result);
    });
});

app.delete('/api/sea_route/:id', (req, res) => {
    const sql = 'DELETE FROM sea_routes WHERE sea_route_id = ?';
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
