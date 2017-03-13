var angular = require('angular');
var lobby = require('./lobby/index');
var restroom = require('./restroom/index');
var menuHeader = require('./menubar/index');
var pagemain = require('./pagemain.component');
var mdName = 'pages';

module.exports = mdName;

angular
  .module(mdName, [lobby, restroom, menuHeader])
  .component('pagemain', pagemain);
