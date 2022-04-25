function start() {
	alert("This is a thank you bot. It was based on GitHub/Anti-Apple4life's tymaker.");
	var one = prompt("Who are you writing to?");
  var two = prompt("What gift did you get from " + one + "?");
  var thr = prompt("What kind of party did " + one + " go to? (Do not include connectors, just the noun)");
  var fou = prompt("What is your name?");
  alert("Here is your letter so far. Press OK.");
  alert("Dear " + one + ", thank you so much for getting me a " + two + ". Thank you for coming to my " + thr + ". From, " + fou);
  var conOne = prompt("If you like your letter so far, type Y. If not, type N. To exit, type E. Case-sensitive.");
  if (conOne == "N") {
  	alert("Starting over. Press OK.");
    start();
  }
  if (conOne == "E") {
  	function exitStarter() {
    	alert("Exiting. Press OK.");
    }
  }
  if (conOne == "Y") {
  	document.getElementById("letter").innerHTML = "Dear " + one + ", thank you so much for getting me a " + two + ". Thank you for coming to my " + thr + ". From, " + fou;
  }
}
