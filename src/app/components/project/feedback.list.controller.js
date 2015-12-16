angular.module('hackathonRatingApp').
controller('FeedbackListController', feedbkCtrl);

function feedbkCtrl($stateParams, ProjectService){
  var vm=this;
  function init(){
    vm.project = ProjectService.getProject($stateParams.projectId);
  }
  init();
}
