angular.module('hackathonRatingApp').factory('UserResource', function($resource) {
  return $resource('http://localhost:1337/user/:id'); // Note the full endpoint address
});

angular.module('hackathonRatingApp').factory('EventResource', function($resource) {
  return $resource('http://localhost:1337/event/:event',{event: "@event"}); // Note the full endpoint address
});

angular.module('hackathonRatingApp').factory('ProjectResource', function($resource) {
  return $resource('http://localhost:1337/event/:eventId/project/:projectId'); // Note the full endpoint address
});