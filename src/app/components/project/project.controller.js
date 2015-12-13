angular.module('hackathonRatingApp').
controller('ProjectController',projectCtrl);

function projectCtrl($stateParams,UserService){
  var vm=this;

  function init(){
    vm.projectDetails={};
    //vm.userDetails={};
    vm.userDetails = UserService.getAllUsers();
    console.log(vm.userDetails);
  }

  vm.createProject = function(){

  };

  vm.getUserDetails = function(){

  };

  init();

}
