const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3333;
const cors = require('cors')

if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

const usersRoute = require('./src/routes/users.route');
const restaurantsRoute = require('./src/routes/restaurants.route');
const itemsRoute = require('./src/routes/items.route');

app.use('/users', usersRoute);
app.use('/restaurants', restaurantsRoute);
app.use('/items', itemsRoute);

app.all('*', (req, res, next) => res.sendStatus(404))
app.use((err, req, res, next) => {
  res.status(err.status).json(err)
})

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
      console.log(`Your server.js port is running ${port}!`)
    })
}

module.exports = app