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

  evtService.deleteEvent = function(eventId){
    var query = EventResource.delete({ id: eventId});
    return query.$promise.then(function(result){
      console.log(result);
      data = evtService.getEventFromServiceStore(eventId);
      console.log(data);
      evtService.eventsList.splice(data.position,1);
      return true;
    },function(err){
      console.log(err);
      return false;
    });
  };

  evtService.updateEvent = function(eventObj) {
    eventObj.$update(function(result){
      console.log(result);
      console.log('updated');
    })
  }

  evtService.loadAllEvents = function(){
    evtService.eventsList = EventResource.query();

  };

  evtService.getEvent = function(eventId) {

    //return EventResource.get({ id: eventId});
      return evtService.eventsList.$promise.then(
        function(){
        return evtService.getEventFromServiceStore(eventId).data;
      }
    );
  };

  evtService.addProjectToEvent = function(project,eventId){
      // Get the event object corresponding to the eventId from the eventStore
      evtService.getEvent(eventId).then(function(eventObj){
        eventObj.projects.push(project);
      });

  };

  evtService.getEventFromServiceStore = function(eventId){
    result={};
    for (i=0;i<evtService.eventsList.length;i++){
      eventObj = evtService.eventsList[i];
      if (eventObj.id === eventId){
        result.position=i;
        result.data=eventObj;
        return result;
      }
    }
    return result;
  };

  init();

}
