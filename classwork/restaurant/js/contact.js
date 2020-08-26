
/*
    Name: Zeynep Tezduyar
    Date Created: 24 August 2020
    Most Recent Version: 26 August 2020
    Purpose: Java Script for Contact Page
*/

var contactForm = document.forms["contactForm"];

var Name = document.getElementById("Name").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;

function validate(){
    contactForm.className = "needs-validation";

    // checking the form's validity with the Constraint Validation API's checkValidity function
    if (!contactForm.checkValidity()) {
        contactForm.className = "was-validated";
        return false;
    }

    if (Name == "" || email == "" || phone == "") {
        alert("Please fill all the required fields!");
        return false;
    }

    if (!validateEmail(email) || !validatePhone(phone)){
        return false;
    }   

    alert("Your request has been successfully sent.")
    contactForm.reset();

    // We always return false so that the form doesn't submit.
    // Submission causes the page to reload.
    return false;
}


function validatePhone (txt) {
    var reg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(txt.value.match(reg)){
        return true;
    }else {
        alert("Invalid Phone Number!");
        return false;
    }
}


function validateEmail (txt) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(txt.value) == false) {
        alert('Invalid Email Address!');
        return false;
    }
    return true;
}


function resetView(){
    contactForm.className = "needs-validation";
    contactForm.reset();
    Name.focus();
}