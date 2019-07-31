const express = require('express');
const path = require('path');
const db = require('./db/connection');
const PORT = process.env.PORT || 8080;
const app = express();
const morgan = require('morgan');

// express session requirements
const SESH_LIFETIME = 1000 * 60 * 60 * 2; // store in env file
const SESH_NAME = 'SID'; // store in env file
const SESH_SECRET = 'somegoodSecret'; // store in env file
const session = require('express-session');
const createDbStore = require('connect-session-sequelize');
const SequelizeStore = createDbStore(session.Store);

// static middleware, body parsing middleware, logging middleware
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // this helped me see req.body
app.use(morgan(process.env.MORGAN_MODE || null));

// middleware for session management

app.use(
  session({
    name: SESH_NAME,
    resave: false,
    saveUninitialized: false,
    secret: SESH_SECRET, // also create env var for this
    cookie: {
      maxAge: SESH_LIFETIME, // create env variable for SESH LIFETIME
      sameSite: true,
      secure: false, // if PROD change to true, create ENV var for this
    },
    store: new SequelizeStore({
      db,
      table: 'session',
      extendDefaultFields: (defaults, session) => ({
        data: defaults.data,
        expires: defaults.expires,
        userId: session.userId,
      }),
    }),
  })
);

// 'API' routes
app.use('/api', require('./api'));

// send index.html
// app.use('*', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '..', 'public/index.html'));
// });

db.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on PORT: ${PORT}`);
    });
  })
  .catch(e => console.error(e));

module.exports = app;
