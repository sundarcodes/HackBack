angular.module('hackathonRatingApp').
controller('ProjectController',projectCtrl);

function projectCtrl($stateParams){
  var vm=this;

  function init(){
    vm.projectDetails={};
  }

  vm.createProject = function(){

  };

}
