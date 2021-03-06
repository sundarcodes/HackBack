'use strict';

angular.module('hackathonRatingApp').
controller('EventController', eventController);

function eventController(EventService,ProjectService,$state,$filter) {
  var evtCtlr = this;

  function init(){
    evtCtlr.eventDetails={};
    // Get all events initially/during page reload
    evtCtlr.eventsList=EventService.getAllEvents();

    //evtCtlr.currentDate = new Date();
    evtCtlr.eventDetails.startDate = new Date();
    evtCtlr.eventDetails.endDate= new Date();

    //console.log(evtCtlr.eventsList);
  }

  evtCtlr.createEvent = function() {
    evtCtlr.startDate=$filter('date')(evtCtlr.startDate, 'dd-MMM-yyyy');
    evtCtlr.endDate=$filter('date')(evtCtlr.endDate, 'dd-MMM-yyyy');
    EventService.createEvent(evtCtlr.eventDetails)
    .then(function(result){
      $state.go('eventList');
    },function(err){
      console.log("Event could not be created");
    });
  };
  init();
}
