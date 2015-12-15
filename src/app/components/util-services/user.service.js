'use strict';

angular.module('hackathonRatingApp').
service('UserService',userService);

function userService(AuthenticationService,$log,UserResource){
  var usrService = this;

  function init() {
    userService.currentUser={};
  }

  usrService.getCurrentUser = function(){
    return userService.currentUser;
  }

  usrService.getAllUsers = function(){
    return UserResource.query();
  }

  usrService.getUserDetails = function(userId){
    console.log(userId);
    console.log('Before res get');
     return UserResource.get({id: userId});
  }

  usrService.login = function (username,password) {
    return AuthenticationService.login(username,password)
    .then(function(result){
      AuthenticationService.saveTokens(result);
      $log.info('User authenticated');
      console.log(result);
      usrService.currentUser=result.data.userData;
      return true;
    },function(status){
      $log.info('User not authenticated');
      $log.info(status);
      throw "Invalid credentials";
    });
  };

  usrService.register = function (username,email,password) {
    return AuthenticationService.register(username,email,password)
    .then(function(data){
      AuthenticationService.saveTokens(data);
      $log.info('User created');
    },function(err){
      $log.info('User not created');
      $log.info(err);
      return "User not created";
    });
  };
  usrService.isAdmin = function() {
      return AuthenticationService.isAdmin();
  }

  usrService.logout = function(){
      AuthenticationService.logout();
      init();
  }

  usrService.isLoggedIn = function(){
    return AuthenticationService.isLoggedIn();
  }

  init();
}
