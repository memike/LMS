var angular = require('angular');

var mainModule = require('./app/main');
var pagesModule = require('./app/pages/index');

var routesConfig = require('./routes');
var app = require('./app/app');
require('angular-ui-router');
require('ngstorage');
require('angular-ui-bootstrap');
require('./js/prefixfree.min');
require('./js/jquery-ui-1.12.1.min');
require('./js/jquery.sparkline.min');
require('./js/bootstrap.min');
require('./js/jquery.easytabs.min');
require('./js/excanvas.min');
require('./js/jquery-1.7.min');

require('./js/main');
require('./css/bootstrap/bootstrap.css');
require('./css/font-awesome-4.3.0/css/font-awesome.min.css');
require('./css/jquery-ui-1.12.1.css');
require('./css/toastr.css');
require('./css/style.css');
require('./css/w3.css');

angular
  .module('app', ['ui.router', 'ngStorage', 'ui.bootstrap', mainModule, pagesModule])
  .component('app', app)
  .config(routesConfig)
  .config(function ($logProvider) {
    $logProvider.debugEnabled(true);
  })
  ;
