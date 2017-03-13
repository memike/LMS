module.exports = {
  template: require('./app.html'),
  controller: AppController
};

function AppController($state) {
  var vm = this;
  vm.checkIn = checkIn;
  vm.checkOut = checkOut;

  function checkIn() {
    $state.go('lobbyAccio');
  }
  function checkOut() {
    $state.go('main');
  }
}
