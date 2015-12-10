angular.module('hackathonRatingApp').factory('UserResource', function($resource) {
  return $resource('localhost:1337/user/:id'); // Note the full endpoint address
});

angular.module('hackathonRatingApp').
service('restAPIUserService',restAPIUserService);

restAPIUserService = function(UserResource) {
  restUserService = this;

  this.doUserLogin = function(){
    
  }

}
