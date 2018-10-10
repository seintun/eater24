const express = require('express');
const app = express();
const port = 3333;
const usersRoute = require('./routes/users.route');
const restaurantsRoute = require('./routes/restaurants.route');
const itemsRoute = require('./routes/items.route');
const ordersRoute = require('./routes/orders.route');

app.use('/users', usersRoute);
app.use('/restaurants', restaurantsRoute);
app.use('/items', itemsRoute);
app.use('/orders', ordersRoute);

app.listen(port, console.log(`Your server.js port is ${port}`));