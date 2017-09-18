module.exports = {
  template: require('./app.html'),
  controller: AppController,
  style: require('./app.css')
};

function AppController($state) {
  var vm = this;
  vm.checkIn = checkIn;
  vm.checkOut = checkOut;
  vm.openNav = openNav;
  vm.closeNav = closeNav;

  function checkIn() {
    $state.go('lobbyAccio');
  }

  function checkOut() {
    $state.go('main');
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
}
