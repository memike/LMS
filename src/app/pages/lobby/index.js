var angular = require('angular');
var lobby = require('./lobby');
var mdName = 'lobby';

module.exports = mdName;

angular
  .module(mdName, [])
  .component('lobbyAccio', lobby);
