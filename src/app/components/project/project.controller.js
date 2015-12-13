angular.module('hackathonRatingApp').
controller('ProjectController',projectCtrl);

function projectCtrl($stateParams,UserService,ProjectService,$state){
  var vm=this;

  function init(){
    vm.projectDetails={};
    vm.projectDetails.event=parseInt($stateParams.id);
    vm.projectDetails.participants=[];
    vm.checkedUsers=[];
    vm.selectedParticipants="";
    vm.userDetails = UserService.getAllUsers();
    console.log(vm.userDetails);
  }

  vm.createProject = function(){

    // Now populate the user Ids of the selected team members
    var projectParticipant={};
    angular.forEach(vm.checkedUsers,function(user){
      //projectParticipant.
      vm.projectDetails.participants.push(user.id);
    });
    ProjectService.createProject(vm.projectDetails,$stateParams.id).then(
      function(){
        $state.go('eventList');
      },function(err){

      }
    );
  };

  vm.getUserDetails = function(){

  };

  vm.toggleSelection = function(userObj){
    // Add to the checked User List
    if (vm.checkedUsers.indexOf(userObj) === -1){
      vm.checkedUsers.push(userObj);
      if (vm.selectedParticipants === ""){
          vm.selectedParticipants=userObj.username;
      }else{
        vm.selectedParticipants+=","+userObj.username;
      }
    }else{
      vm.checkedUsers.splice(vm.checkedUsers.indexOf(userObj),1);
      // Remove from the selected text box - model
      console.log(userObj.username);
      console.log(vm.selectedParticipants.indexOf(userObj.username));
      var replaceString ="";
      if (vm.selectedParticipants.indexOf(userObj.username+",") === -1) {
        replaceString=userObj.username;
      }else{
        replaceString=userObj.username+",";
      }
      vm.selectedParticipants=vm.selectedParticipants.replace(replaceString,"");
    }
  }
  init();

}
