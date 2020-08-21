
// if true, we're tracking the mouse
var tracking = false;
// grab DOM references to be used in all functions
var mouseX = document.getElementById("mouseX");
var mouseY = document.getElementById("mouseY");


// enable or disable mouse tracking
function toggle() {
    // 'this' here is the HTML element that triggered the event.
    // btnToggle

    // classList is an array-like collection of CSS class names

    // It allows us to treat class names individually 
    // instead of setting all classes at once:
    // element.className = "btn btn-default btn-lrg"

    if(tracking) {
        this.classList.remove("btn-danger");
        this.classList.add("btn-success");
        this.innerText = "Start mouse tracking";

        mouseX.innerText = "Untracked";
        mouseY.innerText = "Untracked";

    }else {
        this.classList.remove("btn-success");
        this.classList.add("btn-danger");
        this.innerText = "Stop mouse tracking";
    }

    tracking = !tracking;
}

// react to mouse movements
// if tracking is enables, write the current mouse X and Y to the view
function updateMousePosition(evt) {
    if (tracking) {
        // Our mouse's position in X and Y coordinates is clientX, clientY.
        mouseX.innerText = evt.clientX;
        mouseY.innerText = evt.clientY;
    }

    // 'evt' is a JavaScript event object.
    // It contains different properties depending on the type of event:
    // click, submit, mouseover, even media playback 
}


// Note that the functions toggle and updateMousePosition are not executed.
// Execution would be toggle() and updateMousePosition(event).
// Instead, a reference to the function (its name) is attached to the DOM.
document.getElementById("btnToggle").addEventListener("click", toggle);
document.addEventListener("mousemove", updateMousePosition);

// The DOM's addEventListener function registers our code.