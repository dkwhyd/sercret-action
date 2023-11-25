require('./connection');

const express = require('express');

const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
const routers = require('./src/routes');
const app = express();
const cors = require('cors');
app.use(cors());
const port = 5500;
app.use(express.static(path.join(__dirname, 'public')));


const { decodeToken } = require('./src/auth/middleware');

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  { flags: 'a' },
);
// app.use(function (req, res, next) {
//   res.status(404).send('resource not found');
//   next();
// });
// app.use(morgan('combined', { stream: accessLogStream }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`server running at ${port}`));
module.exports = app;
