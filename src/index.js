const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const { log } = require('console');
const methodOverride = require('method-override');
const exp = require('constants');
const app = express();
const port = 3000;

const route = require('./routes/index');
const db = require('./config/db');

// Coonect to DB
db.connect();

// Static file
app.use(express.static('public'));

// HTTP logger
app.use(morgan('combined'));

// method override use POST as DELETE/PUT/PATCH
app.use(methodOverride('_method'));

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a,b) => a+b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
