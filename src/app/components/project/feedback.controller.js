angular.module('hackathonRatingApp').
controller('FeedBackController', feedbackCtrl);

function feedbackCtrl(){

  vm=this;

  function init(){
    var slider1 = new Slider('#ex1', {
	       formatter: function(value) {
		         return value;
	      }
      });
    var slider2 = new Slider('#ex2', {
         formatter: function(value) {
             return value;
        }
      });
    var slider3 = new Slider('#ex3', {
	       formatter: function(value) {
		         return 'value: ' + value;
	      }
      });
  }
  init();

}
