
var http = require('http');
var methods = require('methods');

var Router = require('./router');
var Layer = require('./layer');

var slice = Array.prototype.slice;

var app = exports = module.exports = {};

app.init = function() {
  this.cache = {};
  this.engines = {};
  this.settings = {};

  this._router = undefined;
}

app.lazyrouter = function() {
  if (!this._router) {
    this._router = new Router({});
  }
}

app.handle = function handle(request, response, callback) {
  var router = this._router;
  
  router.handle(request, response);
}

app.listen = function listen() {
  var server = http.createServer(this);
  return server.listen.apply(server, arguments);
}

methods.forEach(function (method) {
  app[method] = function(path) {
    this.lazyrouter();

    var route = this._router.route(path);

    route[method].apply(route, slice.call(arguments, 1));
    return this;
  };
});