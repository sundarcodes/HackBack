angular.module('hackathonRatingApp').
service('EventService',eventService);

function eventService (EventResource) {
  evtService = this;

  evtService.createEvent = function(eventDetails){
    eventDetails.is_active=true;
    EventResource.save(eventDetails);
  };

  evtService.deleteEvent = function(){

  };

  evtService.listEvents = function(){

  };

  evtService.viewEvent = function(eventId){

  };

}
