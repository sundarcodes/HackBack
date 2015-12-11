angular.module('hackathonRatingApp').service('AuthenticationService', function($window, $location, $http) {
    auth = this;
    auth.isLogged = false;
    auth.isUseraAdmin = false;
    auth.isLoggedIn = function(){
      auth.check();
      return auth.isLogged;
    };
    auth.isAdmin = function(){
      auth.check();
      return auth.isUseraAdmin;
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
      if (auth.isLogged) {

        auth.isLogged = false;
        delete auth.user;
        //delete auth.userRole;

        delete $window.sessionStorage.token;
        delete $window.sessionStorage.user;
        //delete $window.sessionStorage.userRole;
        //$location.path("/login");
      }

    };
    auth.check = function() {
      if ($window.sessionStorage.token && $window.sessionStorage.user) {
        auth.isLogged = true;
        if ($window.sessionStorage.isAdmin) {
          auth.isUseraAdmin = true;
        }
      } else {
        auth.isLogged = false;
        delete auth.user;
      }
    };
    auth.saveTokens = function(result){
      auth.isLogged = true;
      console.log(result);
      auth.user=result.data.userData.username;
      $window.sessionStorage.token = result.data.token;
      $window.sessionStorage.user = result.data.userData.username;
      $window.sessionStorage.isAdmin = result.data.userData.isAdmin; // to fetch the user details on refresh
       //$window.sessionStorage.userRole = user.role; // to fetch the user details on refresh
  };
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
