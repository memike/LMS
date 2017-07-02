var angular = require('angular');
var moduleName = 'main';
var mainModule = {
  template: require('./main.html'),
  controller: MainController
};
module.exports = moduleName;

angular.module(moduleName, [])
  .component('main', mainModule);

function MainController() {
}
