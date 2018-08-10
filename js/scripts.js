// Below if back-end logic
var rubyRails = 0;
var cssReact = 0;
var cNet = 0;
var none = 0;
var all = 0;

var tallyUpResults = function(choice) // tallying up users input choices
{
  if ( choice === "ruby-rails") {
    rubyRails += 1;
  } else if ( choice === "css-react" ) {
    cssReact += 1;
  } else if ( choice === "c-net" ) {
    cNet += 1;
  } else if ( choice === "none") {
    none += 1;
  } else if ( choice  === "all") {
    rubyRails += 1;
    cssReact += 1;
    cNet += 1;
  }
}

// Below is front-end logic
$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();

    var userName = $("#user-name-input").val(); // survey user inputs
    var choice1 = $("input:radio[name=question1]:checked").val();
    tallyUpResults(choice1);
    var choice2 = $("input:radio[name=question2]:checked").val();
    tallyUpResults(choice1);
    var choice3 = $("input:radio[name=question3]:checked").val();
    tallyUpResults(choice1);
    var choice4 = $("input:radio[name=question4]:checked").val();
    tallyUpResults(choice1);
    var choice5 = $("input:radio[name=question5]:checked").val();
    tallyUpResults(choice1);
    var choice6 = $("input:radio[name=question6]:checked").val();
    tallyUpResults(choice1);

    if ( userName === "" || choice1 === undefined || choice2 === undefined || choice3 === undefined || choice4 === undefined || choice5 === undefined || choice6 === undefined ) // checking if all input fields are filled, else prevent submission of form
    {
      $("#must-fill-message").show();
    } else {
      $("#must-fill-message").hide();
      $(".user-name").text(userName);

      if ( rubyRails >= 4 ) {
        $("#ruby-rails").show();
      } else if ( cssReact >= 4 ) {
        $("#css-react").show();
      } else if ( cNet >= 4 ) {
        $("#c-net").show();
      } else if ( none >= 5 ) {
        $("#no-suggestion").show();
      }

      $("#survey-container").hide();
    }
  });

  $(".return").click(function() // return to home page button
  {
    rubyRails = 0;
    cssReact = 0;
    cNet = 0;
    none = 0;
    all = 0;
    $("#user-name-input").val("");
    $('input[type="radio"]').prop('checked', false);
    $(".hide").hide();
    $("#survey-container").show();
  });
});
