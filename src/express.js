var mixin = require('merge-descriptors');
var proto = require('./application');

exports = module.exports = createApplication;

function createApplication() {
  var app = function (request, response, next) {
    app.handle(request, response, next);
  };

  mixin(app, proto, false);

  app.init();
  return app;
}

exports.application = proto;