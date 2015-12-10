angular.module('hackathonRatingApp').service('AuthenticationService', function($window, $location, $http) {
    auth = this;
    auth.isLogged = false;
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
      } else {
        auth.isLogged = false;
        delete auth.user;
      }
    };
    auth.saveTokens = function(user){
      auth.isLogged = true;
      auth.user=user.userData.username;
      console.log(user);
      $window.sessionStorage.token = user.token;
      $window.sessionStorage.user = user.userData.username; // to fetch the user details on refresh
       //$window.sessionStorage.userRole = user.role; // to fetch the user details on refresh
  };
});

angular.module('hackathonRatingApp').service('TokenInterceptor', function($q, $window) {
  var tokenInt = this;
    tokenInt.request = function(config) {
      config.headers = config.headers || {};
      if ($window.sessionStorage.token) {
        config.headers['X-Access-Token'] = $window.sessionStorage.token;
        config.headers['X-Key'] = $window.sessionStorage.user;
        config.headers['Content-Type'] = "application/json";
      }
      return config || $q.when(config);
    };

    tokenInt.response = function(response) {
      return response || $q.when(response);
    };
});
