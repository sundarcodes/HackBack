'use strict';

angular.module('hackathonRatingApp').
service('UserService',userService);

function userService(RestAPIService){
  var usrService = this;

  this.login = function (username,password) {
    RestAPIService.doUserLogin(username,password);
  };
}
