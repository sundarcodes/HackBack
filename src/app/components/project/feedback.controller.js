angular.module('hackathonRatingApp').
controller('FeedBackController', feedbackCtrl);

function feedbackCtrl(AuthenticationService,$stateParams,FeedbackResource,$state){

  var vm=this;

  function init(){
    vm.visualAppealSlider = new Slider('#ex1', {
	       formatter: function(value) {
		         return value;
	      }
      });
    vm.technicalDifficultySlider = new Slider('#ex2', {
         formatter: function(value) {
             return value;
        }
      });
    vm.completenessSlider = new Slider('#ex3', {
	       formatter: function(value) {
		         return value;
	      }
      });
    vm.overallFeelSlider = new Slider('#ex4', {
	       formatter: function(value) {
		         return value;
	      }
        });
    vm.feedback={};
  }

  vm.isUserLoggedIn = function(){
    return AuthenticationService.isLoggedIn();
  };

  vm.submitFeedback = function(){
    // Update the values of the sliders to the feedback object

    vm.feedback.visualAppeal=vm.visualAppealSlider.sliderElem.textContent;
    vm.feedback.technicalDifficulty=vm.technicalDifficultySlider.sliderElem.textContent;
    vm.feedback.completeness=vm.completenessSlider.sliderElem.textContent;
    vm.feedback.overallFeel=vm.overallFeelSlider.sliderElem.textContent;
    console.log($stateParams);
    vm.feedback.project=$stateParams.projectId;
    console.log(vm.feedback);
    var saveQuery = FeedbackResource.save(vm.feedback);
    saveQuery.$promise.then(function(result){
      console.log("Saved");
      alert("Feedback posted");
      $state.go("eventList");
    })
    //console.log(vm.overallFeelSlider.sliderElem.textContent);

    // Use the resource to submit the feedback
  };

  init();

}
