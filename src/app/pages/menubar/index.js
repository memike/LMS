var angular = require('angular');
var navigHeader = require('./header');
var mdName = 'menuHeader';

module.exports = mdName;

angular
  .module(mdName, [])
  .component('menuHeader', navigHeader);
