angular.module('hackathonRatingApp').
service('ProjectService',projectService);

function projectService(ProjectResource,EventResource,ProjectParticipantResource){

  var vm=this;

  function init(){

  }

  vm.setProjectList = function(projects){
    vm.projectList=projects;
    console.log(vm.projectList);
  }

  vm.addProject = function(project){
    console.log(vm.projectList);
    vm.projectList.push(project);
  }

  vm.getProject = function(projectId){
    console.log(vm.projectList);
    for (i=0;i<vm.projectList.length;i++){
      project = vm.projectList[i];
      console.log(project);
      if (project.id === parseInt(projectId)){
        console.log('found');
        return project;
      }
    }
    // angular.forEach(vm.projectList,function(project){
    //   console.log(project.id);
    //     console.log(projectId);
    //   if (parseInt(project.id) === parseInt(projectId)){
    //     return project;
    //   }
    // });
    return {};
  }

  vm.createProject = function(projectDetail,eventId){
    console.log(projectDetail);
    var query = ProjectResource.save(projectDetail);
    return query.$promise.then(function(result){
      console.log(result);
      var projectParticipant={};
      vm.addProject(result);
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
