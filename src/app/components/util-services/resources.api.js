angular.module('hackathonRatingApp').factory('UserResource', function($resource) {
  return $resource('http://localhost:1337/user/:id'); // Note the full endpoint address
});

angular.module('hackathonRatingApp').factory('EventResource', function($resource) {
  return $resource('http://localhost:1337/event/:eventId',{eventId: "@id"},{
    update: {
      method: 'PUT' // this method issues a PUT request
    }
  }); // Note the full endpoint address
});

// angular.module('hackathonRatingApp').factory('EventResource', function($resource) {
//   return $resource('http://localhost:1337/event/:event/:project',{event: "@event",project: "@project"},{
//     update: {
//       method: 'PUT' // this method issues a PUT request
//     }
//   }); // Note the full endpoint address
// });

// angular.module('hackathonRatingApp').factory('ProjectResource', function($resource) {
//   return $resource('http://localhost:1337/event/:eventId/projects/:projectId',
// {eventId: "@eventId",projectId: "@id"}); // Note the full endpoint address
// });

angular.module('hackathonRatingApp').factory('ProjectResource', function($resource) {
  return $resource('http://localhost:1337/project/:projectId',
{projectId: "@id"}); // Note the full endpoint address
});

angular.module('hackathonRatingApp').factory('FeedbackResource', function($resource) {
  return $resource('http://localhost:1337/feedback/:id',
{id: "@id"}); // Note the full endpoint address
});

angular.module('hackathonRatingApp').factory('ProjectParticipantResource', function($resource) {
  return $resource('http://localhost:1337/projectparticipants/:id',
{id: "@id"}); // Note the full endpoint address
});
