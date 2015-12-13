angular.module('hackathonRatingApp').
service('ProjectService',projectService);

function projectService(ProjectResource,EventResource,ProjectParticipantResource){

  var vm=this;

  function init(){

  }

  vm.createProject = function(projectDetail,id){
    console.log(projectDetail);
    var query = ProjectResource.save(projectDetail);
    return query.$promise.then(function(result){
      console.log(result);
      var projectParticipant={};
      angular.forEach(projectDetail.participants,function(userId){
        projectParticipant.project=parseInt(result.id)
        projectParticipant.participant=userId;
        var query = ProjectParticipantResource.save(projectParticipant);
        query.$promise.then(function(result){
          console.log(result);
        },function(err){
          console.log(err);
          console.log("Error in creating project participant mapping");
        });
      });
    },function(err){
      console.log("Error in creating project");
      console.log(err);
    });
  };

  init();
}
