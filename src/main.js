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

// Function to change the font size
function changeFontSize(action) {

    let currentSize = localStorage.getItem("fontSize");
    currentSize = currentSize ? parseInt(currentSize) : 16;

    var sizeFactor = 2;

    if(action === "increase") {
        currentSize += sizeFactor;
    } 
    else {
        currentSize -= sizeFactor;
    }

    localStorage.setItem("fontSize", currentSize);

    // Apply the new font size to elements with the change-font-size class
    const elements = document.querySelectorAll(".change-font-size");
    elements.forEach(element => {
        element.style.fontSize = currentSize + "px";
    });
}

// Function to apply the font size from localStorage when the page loads
window.onload = function() {

    let currentSize = localStorage.getItem("fontSize");
    currentSize = currentSize ? parseInt(currentSize) : 16;

    const elements = document.querySelectorAll(".change-font-size");
    elements.forEach(element => {
        element.style.fontSize = currentSize + "px";
    });
};

// Function to prompt for name and speak it
function promptAndSpeakName() {

    const name = prompt('Enter your name:');
    
    if (name) {

        const spokenTextElement = document.createElement("p");
        spokenTextElement.textContent = `Hello ${name}. Welcome to my portfolio page`;

        const utterance = new SpeechSynthesisUtterance(`Hello ${name}. Welcome to my portfolio page`);
        speechSynthesis.speak(utterance);

        const buttons = document.querySelectorAll("button");
        buttons[buttons.length - 1].insertAdjacentElement("afterend", spokenTextElement);
    }
}

// Function to initialize text-to-speech functionality
function initializeTextToSpeech() {

    const speakContentButton = document.getElementById('speakContentButton');

    if (speakContentButton) {
        speakContentButton.addEventListener('click', speakAllContent);
    }
}


// Function to read out text content from <h> and <p> tags in the HTML page with a slower speech rate
function speakAllContent() {

    const headerParagraphElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, td, input, label');

    let allTextContent = '';
    headerParagraphElements.forEach(element => {
        allTextContent += element.textContent + ' ';
    });

    if (allTextContent.trim() !== '') {

        const utterance = new SpeechSynthesisUtterance(allTextContent.trim());
        utterance.rate = 1; 

        // Speak the text content
        speechSynthesis.speak(utterance);
    } 
    else {
        alert('No text content found in <h> and <p> tags.');
    }
}

// Function to toggle the visibility of accessibility options
function toggleAccessibilityOptions() {

    const accessibilityOptions = document.getElementById('accessibilityOptions');

    if (accessibilityOptions.style.right === '0px') {
        accessibilityOptions.style.right = '-200px'; 
    } 
    else {
        accessibilityOptions.style.right = '0px'; 
    }
}

// Variable to track if color blind mode is enabled or disabled
let colorBlindMode = false;

// Function to toggle color blind mode
function toggleColorBlindMode(){

    colorBlindMode = !colorBlindMode;

    if(colorBlindMode){
        document.body.classList.add("color-blind-mode");
    }
    else{
        document.body.classList.remove("color-blind-mode");
    }
}

document.addEventListener('DOMContentLoaded', initializeTextToSpeech);