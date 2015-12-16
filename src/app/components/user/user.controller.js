angular.module('hackathonRatingApp').
controller('UserController',userController);

function userController(UserService,ProjectResource,ProjectService){
  var vm = this;
  function init(){
    vm.currentUserId = UserService.getCurrentUserId();
    console.log(vm.currentUserId);
    vm.projects = [];
    var userResource = UserService.getUserDetails(vm.currentUserId);
    userResource.$promise.then(function(result){
      //console.log(result);
      //vm.projects=result.projects;
      angular.forEach(result.projects,function(project){
        vm.projects.push(ProjectResource.get({projectId: project.id}));
      });
       console.log(vm.projects);
      ProjectService.setProjectList(vm.projects);
    });
  }

  init();

}
