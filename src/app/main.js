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
  function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
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
}
