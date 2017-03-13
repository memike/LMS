var angular = require('angular');
var lobby = require('./restroom');
var mdName = 'restroom';

module.exports = mdName;

angular
  .module(mdName, [])
  .component('restRoomAccio', lobby);
