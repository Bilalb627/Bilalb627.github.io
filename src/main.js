/**
 * Prompt the user for their name.
 */
function promptName(){
    var userName = prompt("Please enter your name:");
    document.getElementById("name").innerHTML = userName;
}

/**
 * Enlarge the profile picture when it is clicked.
 */
function enlargeImage(){
    var image = document.getElementById("enlargeImage");
    image.style.width = (image.clientWidth + 250) + "px";
    image.style.height = (image.clientHeight + 200) + "px";
}

/**
 * Navigate to the specified URL.
 */
function navigateTo(url){
    window.location.href = url;
}

/**
 * Change the colour of the navigation item on mouseover.
 */
function mouseOver(element){
    element.style.color = "#FF0000";
    element.style.fontWeight = "bold";
    element.style.fontSize = "18px"; 
}

/**
 * Reset the colour, font weight, and font size of the navigation item on mouseout.
 */
function mouseOut(element){
    element.style.color = "#eee";
    element.style.fontWeight = "bold";
    element.style.fontSize = "inherit"; 
}