var Router = require('express').Router();
var controllers = require('./controllers');

const routes = [
  Router.get("/", controllers.videos.getVideos)
];

module.exports = routes;
