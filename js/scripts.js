var rubyRails = 0;
var cssReact = 0;
var cNet = 0;
var none = 0;
var all = 0;

var tallyUpResults = function(choice) {
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

$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
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

    if ( rubyRails === 6 ) {
      $("#ruby-rails").show();
    } else if ( cssReact === 6 ) {
      $("#css-react").show();
    } else if ( cNet === 6 ) {
      $("#c-net").show();
    } else if ( none === 6 ) {
      $("#no-suggestion").show();
    }

    $("#survey-container").hide();

    console.log("ruby: " + rubyRails + " css-react: " + cssReact + " c-net " + cNet + " none: " + none + " all: " + all);
  });
});
