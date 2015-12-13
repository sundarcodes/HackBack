angular.module('hackathonRatingApp').
service('ProjectService',projectService);

function projectService(ProjectResource,EventResource){

  var vm=this;

  function init(){

  }

  vm.createProject = function(projectDetail,id){
    console.log(projectDetail);
    var query = ProjectResource.save(projectDetail);
    query.$promise.then(function(result){
      console.log(result);

    },function(err){

    });
  };

  init();
}
