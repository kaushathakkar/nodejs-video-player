const express = require('express');
const app = express();
app.use('/uploads', express.static('server/assets/uploads'));
//app.use(express.static('server/assets/uploads'))
app.set('views', './server/views');
app.set('view engine', 'ejs');
global.db = require('./server/config/sequelize.config');
global.model = require('./server/models');
const routes = require('./server/routes.js');
app.use('/', routes);

const server = require('http').Server(app);
const port = process.env.PORT || 4220;
server.listen(port);