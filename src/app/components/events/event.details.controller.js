'use strict';

angular.module('hackathonRatingApp').
controller('EventDetailsController', eventDetailsController);

function eventDetailsController($stateParams,EventService){
  var evtDetCtrl=this;

  function init(){
    evtDetCtrl.eventObj = EventService.getEvent($stateParams.id);
    console.log(evtDetCtrl.eventObj);
  }
  init();
}
