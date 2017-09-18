var angular = require('angular');
var moduleName = 'main';
var mainModule = {
  template: require('./main.html'),
  controller: MainController
};
module.exports = moduleName;

angular.module(moduleName, [])
  .component('main', mainModule);

function MainController($scope) {
  $scope.limitCour = 8;
  $scope.limitNews = 6;
  this.checkScroll = checkScroll;
  this.topFunction = topFunction;

  function topFunction() {
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
  }

  function checkScroll() {
    var scroll = $(window).scrollTop();
    var height = $(document).height();
    if (scroll + height !== $(document).height()) {
      document.getElementsByClassName("circle")[0].style.display = "block";
    } else {
      document.getElementsByClassName("circle")[0].style.display = "none";
    }
  }

  $(window).scroll(function ($event) {
    var scroll = $(window).scrollTop();
    var height = $(document).height();
    if (scroll + height !== $(document).height()) {
      document.getElementsByClassName("circle")[0].style.display = "block";
    } else {
      document.getElementsByClassName("circle")[0].style.display = "none";
    }
  });
  // Make Data Test COURSE LERNING
  $scope.course = [{
    author: "Phu & Jame",
    name: "HTML&CSS",
    status: "Start",
    progress: "0",
    link: "",
    courseImg: "../images/html.png"
  }, {
    author: "",
    name: "Coming Soon",
    status: "Block",
    progress: "0",
    link: "",
    courseImg: ""
  }, {
    author: "",
    name: "Coming Soon",
    status: "Block",
    progress: "0",
    link: "",
    courseImg: ""
  }, {
    author: "",
    name: "Coming Soon",
    status: "Block",
    progress: "0",
    link: "",
    courseImg: ""
  }, {
    author: "",
    name: "Coming Soon",
    status: "Block",
    progress: "0",
    link: "",
    courseImg: ""
  }, {
    author: "",
    name: "Coming Soon",
    status: "Block",
    progress: "0",
    link: "",
    courseImg: ""
  }, {
    author: "",
    name: "Coming Soon",
    status: "Block",
    progress: "0",
    link: "",
    courseImg: ""
  }, {
    author: "",
    name: "Coming Soon",
    status: "Block",
    progress: "0",
    link: "",
    courseImg: ""
  }];
  // END COURSE LERNING

  // Make Data News
  $scope.News = [{
    name: "Update your Skills",
    soft: "0",
    link: "",
    courseImg: "../images/new.jpeg"
  }, {
    name: "Team Work",
    soft: "1",
    link: "",
    courseImg: "../images/new2.jpg"
  }, {
    name: "Tip & Travel",
    soft: "2",
    link: "",
    courseImg: "../images/new3.jpeg"
  }, {
    name: "About Arts",
    soft: "3",
    link: "",
    courseImg: "../images/new4.jpeg"
  }, {
    name: "Thinking",
    soft: "4",
    link: "",
    courseImg: "../images/new5.jpeg"
  }, {
    name: "Creative",
    soft: "5",
    link: "",
    courseImg: "../images/new6.jpeg"
  }, {
    name: "Planing",
    soft: "6",
    link: "",
    courseImg: "../images/new7.jpeg"
  }];
   // END NEWS
}
