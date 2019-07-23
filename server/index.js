const express = require('express');
const path = require('path');
const db = require('./db/index');
const PORT = process.env.PORT || 8080;
const app = express();

// db sync, seed, and app start
db.sync({force: true})
.then(() => {
    // seed();
    app.listen(PORT);
})
.catch(e => console.error(e));

// static middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

// body parsing middleware
app.use(express.json());

// 'API' routes
app.use('/api', require('./api'));

// send index.html
app.use('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
});

module.exports = app;

