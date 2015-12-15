angular.module('hackathonRatingApp').
controller('UserController',userController);

function userController(UserService){
  var vm = this;
  function init(){
    vm.currentUser = UserService.getCurrentUser();
    console.log(vm.currentUser);
    var userResource = UserService.getUserDetails(vm.currentUser.id);
    userResource.$promise.then(function(result){
      console.log(result);
      vm.projects=result.projects;
    });
  }

  init();

}
