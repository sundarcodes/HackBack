angular.module('hackathonRatingApp').service('AuthenticationService', function($window, $location, $http) {
    auth = this;


    function init(){
      auth.user={};
      auth.user.isLogged = false;
      auth.user.isUseraAdmin = false;
      auth.user.userId = 0;
      auth.check();
    }

    auth.isLoggedIn = function(){
      auth.check();
      return auth.user.isLogged;
    };
    auth.isAdmin = function(){
      auth.check();
      return auth.user.isUseraAdmin;
    };
    auth.getCurrentUserId = function(){
      auth.check();
      //console.log("In get current User ID");
      //console.log(auth.user.userId);
      return auth.user.userId;
    };
    auth.getCurrentUserName = function(){
      auth.check();
      //console.log("In get current User ID");
      //console.log(auth.user.userId);
      return auth.user.username;
    };
    auth.login = function (username, password) {
      return $http.post('http://localhost:1337/auth/local', {
        identifier: username,
        password: password
      });
    };
    auth.register = function(username, email, password) {
      return $http.post('http://localhost:1337/auth/local/register', {
        email: email,
        username: username,
        password: password
      });
    };
    auth.logout = function() {
      if (auth.user.isLogged) {

        auth.user.isLogged = false;
        auth.user.isUseraAdmin = false;
        //delete auth.user;
        //delete auth.userRole;

        delete $window.sessionStorage.token;
        delete $window.sessionStorage.user;
        delete $window.sessionStorage.isAdmin;
        delete $window.sessionStorage.userId;
        //delete $window.sessionStorage.userRole;
        //$location.path("/login");
      }

    };
    auth.check = function() {
      if ($window.sessionStorage.token && $window.sessionStorage.user) {
        auth.user.isLogged = true;
        auth.user.userId = $window.sessionStorage.userId;
        // console.log("Assigning user id");
        // console.log(auth.user.userId);
        // console.log($window.sessionStorage.userId);
        if ($window.sessionStorage.isAdmin === "true") {
//          console.log("Admin true");
          auth.user.isUseraAdmin = true;
        } else{
          auth.user.isUseraAdmin = false;
        }
      } else {
        auth.user.isLogged = false;
        //delete auth.user;
      }
    };
    auth.saveTokens = function(result){
      auth.user.isLogged = true;
      //console.log(result);
      auth.user.username=result.data.userData.username;
      $window.sessionStorage.token = result.data.token;
      $window.sessionStorage.user = result.data.userData.username;
      $window.sessionStorage.userId = result.data.userData.id;
      //console.log("Saved in session storage");
      if (result.data.userData.isAdmin){
      $window.sessionStorage.isAdmin = true;
    } else{
      $window.sessionStorage.isAdmin = false;
    } // to fetch the user details on refresh
       //$window.sessionStorage.userRole = user.role; // to fetch the user details on refresh
  };

  init();
});

angular.module('hackathonRatingApp').factory('TokenInterceptor', function($q, $window) {
  return {
    request: function(config) {
      config.headers = config.headers || {};
      if ($window.sessionStorage.token) {
        config.headers['Authorization'] = 'Bearer ' + $window.sessionStorage.token;
        //config.headers['X-Key'] = $window.sessionStorage.user;
        config.headers['Content-Type'] = "application/json";
      }
      return config || $q.when(config);
    },

    response: function(response) {
      return response || $q.when(response);
    }
  };
});
