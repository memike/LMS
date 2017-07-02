module.exports = {
  template: require('./app.html'),
  controller: AppController,
  style: require('./app.css')
};

function AppController($state) {
  var vm = this;
  vm.checkIn = checkIn;
  vm.checkOut = checkOut;
  vm.myFunction = myFunction;
  vm.toggleFunction = toggleFunction;

  function checkIn() {
    $state.go('lobbyAccio');
  }

  function checkOut() {
    $state.go('main');
  }

  // Change style of navbar on scroll
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      navbar.className = "w3-bar" + " w3-card-2" + " w3-animate-top" + " w3-white";
    } else {
      navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-white", "");
    }
  }

  // Used to toggle the menu on small screens when clicking on the menu button
  function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") === -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }
}
