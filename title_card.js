// Listens to see when the jumbotron button is pushed
document.getElementById("start_button").addEventListener("mousedown", function(){
    // Ensures that the Start Game button actually runs an event when clicked.
    // this uses jQuery to select the intro card and make it fade out over 2000 milliseconds (2 seconds)
    $("#introCard").fadeOut(2000);
});