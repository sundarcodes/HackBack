'use strict';

angular.module('hackathonRatingApp').
service('UserService',userService);

function userService(AuthenticationService,$log){
  var usrService = this;

  this.login = function (username,password) {
    return AuthenticationService.login(username,password)
    .then(function(data){
      AuthenticationService.saveTokens(data);
      $log.info('User authenticated');
    },function(status){
      $log.info('User not authenticated');
      $log.info(status);
    });
  };

  this.register = function (username,email,password) {
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
}
