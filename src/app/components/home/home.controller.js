'use strict;'

angular.module('hackathonRatingApp').
controller('HomeController',homeController);

function homeController($state,UserService){

  var homeCtrl = this;

  function init() {
    homeCtrl.email="";
    homeCtrl.password="";
  }

  homeCtrl.register = function(){
      UserService.register(homeCtrl.username,homeCtrl.email,homeCtrl.password);
  };

  homeCtrl.login = function () {
    UserService.login(homeCtrl.email,homeCtrl.password).then(function(){
      $state.go('user');
    },function(err){

    });

  };

  // Initialize
  init();
}
