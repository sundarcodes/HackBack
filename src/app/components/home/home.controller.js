'use strict;'

angular.module('hackathonRatingApp').
controller('HomeController',homeController);

function homeController($state,UserService){

  var homeCtrl = this;

  function init() {
    homeCtrl.email="";
    homeCtrl.password="";
    homeCtrl.isLoginError = false;
  }

  homeCtrl.register = function(){
      UserService.register(homeCtrl.username,homeCtrl.email,homeCtrl.password).then(function(isUserAdmin){
        $state.go('user');
      },function(err){
        homeCtrl.isLoginError = true;
      });
  };

  homeCtrl.login = function () {
    UserService.login(homeCtrl.email,homeCtrl.password).then(function(isUserAdmin){
      $state.go('user');
    },function(err){
      homeCtrl.isLoginError = true;
    });

  };

  homeCtrl.loginError = function() {
    return homeCtrl.isLoginError;
  }
  // Initialize
  init();
}
