// The following handles the form submission, clears form data, and logs stored data in the console.
document.addEventListener("DOMContentLoaded", function () {

    var storedData = localStorage.getItem('formData');
    var formData;

    if (storedData) {
        formData = JSON.parse(storedData);
    } 
    else {
        formData = {};
    }

    var logContent = "Stored Data in Local Storage:\n\n";

    for (var key in formData) {
        if (Array.isArray(formData[key])) {
            if (formData[key].length > 0) {
                logContent += `${key}: ${formData[key].join(', ')}\n`;
            }
        } 
        else {
            if (formData[key]) {
                logContent += `${key}: ${formData[key]}\n`;
            }
        }
    }

    // Added console logging for debugging purposes. 
    //console.log(logContent);

    document.getElementById("surveyForm").addEventListener("submit", function (event) {
        event.preventDefault();
        submitForm();
    });

    document.getElementById("clearButton").addEventListener("click", function (event) {
        event.preventDefault();
        clearForm();
    });
});

/**
 * Handles the form submission by collecting data from various form fields, then it stores it in local storage.
 * Finally, it alerts the user with a message of storage. 
 */
function submitForm() {

    var formData = {};
    formData.contactMethod = getRadioValue('contactMethod');
    formData.hearAbout = getRadioValue('hearAbout');
    formData.otherSpecify = document.querySelector('input[name="otherSpecify"]').value;
    formData.occupation = getRadioValue('occupation');

    // Question 4
    formData.selectedDevice1 = getCheckboxValues('desktopCheckbox');
    formData.selectedDevice2 = getCheckboxValues('laptopCheckbox');
    formData.selectedDevice3 = getCheckboxValues('smartphoneCheckbox');
    formData.selectedDevice4 = getCheckboxValues('tabletCheckbox');
    formData.otherDevices = document.querySelector('input[name="otherDevices"]').value;

    // Question 5
    formData.selectedTopic1 = getCheckboxValues('technology');
    formData.selectedTopic2 = getCheckboxValues('science');
    formData.selectedTopic3 = getCheckboxValues('sports');
    formData.selectedTopic4 = getCheckboxValues('literature');
    formData.selectedTopic5 = getCheckboxValues('travel');

    // Question 6
    formData.selectedMedia1 = getCheckboxValues('facebook');
    formData.selectedMedia2 = getCheckboxValues('twitter');
    formData.selectedMedia3 = getCheckboxValues('instagram');
    formData.selectedMedia4 = getCheckboxValues('linkedin');

    // Question 7
    formData.selectedHobbie1 = getCheckboxValues('cooking');
    formData.selectedHobbie2 = getCheckboxValues('photography');
    formData.selectedHobbie3 = getCheckboxValues('gaming');
    formData.selectedHobbie4 = getCheckboxValues('hiking');
    formData.selectedHobbie5 = getCheckboxValues('gardening');

    formData.impactBookMovie = document.querySelector('input[name="impactBookMovie"]').value;
    formData.dreamVacation = document.querySelector('textarea[name="dreamVacation"]').value;
    formData.additionalInfo = document.querySelector('textarea[name="additionalInfo"]').value;

    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Data has been stored in local storage.');
}

/**
 * Function to get the value of the selected radio button.
 */
function getRadioValue(name) {
    var radioButtons = document.querySelectorAll('input[name="' + name + '"]:checked');

    if (radioButtons.length > 0) {
        return radioButtons[0].value;
    } 
    else {
        return 'No options were selected';
    }
}

/**
 * Function to get the values of selected checkboxes.
 */
function getCheckboxValues(id) {
    
    var checkboxes = document.querySelectorAll('#' + id + ':checked');
    var values = [];

    checkboxes.forEach(function (checkbox) {
        values.push(checkbox.value);
    });

    return values;
}

/**
 * Function to clear/reset the form.
 */
function clearForm() {
    document.getElementById('surveyForm').reset();
    localStorage.removeItem('formData');
    alert("Form has been cleared.");
}
