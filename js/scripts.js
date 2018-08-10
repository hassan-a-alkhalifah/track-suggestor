var ruby-rails = 0;
var css-react = 0;
var c-net = 0;
var none = 0;
var all = 0;

$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    var choice1 = $("input:radio[name=question1]:checked").val();
    var choice2 = $("input:radio[name=question2]:checked").val();
    var choice3 = $("input:radio[name=question3]:checked").val();
    var choice4 = $("input:radio[name=question4]:checked").val();
    var choice5 = $("input:radio[name=question5]:checked").val();
    var choice6 = $("input:radio[name=question6]:checked").val();

    var tallyUpResults = functions(choice) {
      if ( choice === "ruby-rails") {

      } else if ( choice === "css-react" ) {

      } else if ( choice === "c-net" ) {

      } else if ( choice === "all") {

      } else if ( choice  === "none") {

      }
    }
  });
});
