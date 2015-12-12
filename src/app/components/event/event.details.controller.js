'use strict';

angular.module('hackathonRatingApp').
controller('EventDetailsController', eventDetailsController);

function eventDetailsController($stateParams,EventService,AuthenticationService,$state){
  var evtDetCtrl=this;

  function init(){
    EventService.getEvent(parseInt($stateParams.id)).then(function(obj){
      evtDetCtrl.eventObj =  obj;
    });
  }
  evtDetCtrl.deleteEvent = function(){
    EventService.deleteEvent(parseInt($stateParams.id)).then(
      function(){
        $state.go('eventList');
      }
    );
  };

  evtDetCtrl.updateEvent = function(){
    EventService.updateEvent(evtDetCtrl.eventObj);
  };

  evtDetCtrl.isUserAdmin = function(){
    return AuthenticationService.isAdmin();
  }
  init();
}
