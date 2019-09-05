// Christian make the title card go away after the user clicks start game with a fade away effect.

// Listens to see when the jumbotron button is pushed

document.getElementById("start_button").addEventListener("mousedown", function(){
    // Ensures that the Start Game button actually runs an event when clicked.
    // alert("hey bud");
    // this uses jQuery to select the intro card and make it fade out over 2000 milliseconds (2 seconds)
    $("#introCard").fadeOut(2000);
});