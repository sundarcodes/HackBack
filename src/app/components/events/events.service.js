angular.module('hackathonRatingApp').
service('EventService',eventService);

function eventService (EventResource) {
  evtService = this;

  function init() {
    evtService.loadAllEvents();
  }

  evtService.getAllEvents = function(){
    return evtService.eventsList;
  };
  evtService.createEvent = function(eventDetails){
    eventDetails.is_active=true;
    var query = EventResource.save(eventDetails);
    return query.$promise.then(function(result){
      console.log(result);
      evtService.eventsList.push(result);
      return true;
    },function(err){
      console.log(err);
      return false;
    });
  };

  evtService.deleteEvent = function(){

  };

  evtService.loadAllEvents = function(){
    evtService.eventsList = EventResource.query();
  };

  evtService.getEvent = function(eventId){
    return EventResource.get({ id: eventId});
    // console.log(evtService.eventsList);
    // for (i=0;i<evtService.eventsList.length;i++){
    //   if (eventObj.id === eventId){
    //     return eventObj;
    //   }
    // }
    // return {};
  };

  init();

}
