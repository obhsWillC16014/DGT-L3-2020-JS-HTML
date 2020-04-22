// JavaScript Document

//Output Name
function outputName() {
    var firstName = document.getElementById("firstNameInput").value;
    var lastName = document.getElementById("lastNameInput").value;
    alert("Your Name Is:" + firstName + " " + lastName);
    document. getElementById("nameOutput").innerHTML = firstName + " " + lastName;
}


//Check Age
function checkAge() {
var age = Number(age_input.value); //storing the age as is
alert(age); //test alert
//conditional staements to check that the number is within a valid range/can party
if (isNaN(age) || (age == '')) { //checks that the number is not null or not a number
document.getElementById("error_message").innerHTML = "Please enter a valid number";
} else if (age > 130) {
document.getElementById("error_message").innerHTML = "There is no one older than 130";
} else if (age < 0) {
document.getElementById("error_message").innerHTML = "You can't be that young";
} else if ((age >= 18) && (age <= 130)) { //if your age is between 18 and 30
document.getElementById("error_message").innerHTML = "You are old enough to go partying!";
} else if (age <= 18) {
document.getElementById("error_message").innerHTML = "You are too young to go partying!";
}
var cellPhone = Number(cellphoneInput.value);
if (isNaN(cellPhone)){
    document.getElementById("output_cellphone").innerHTML = "You have an Incorrect Phone Number";
}
else{
    document.getElementById("output_cellphone").innerHTML = "Your cellphone number is: " + cellPhone;
}

var firstName = name_input.value;
var firstNameLength = firstName.length;
}

function checkInputs()
{
    var emailAddress =  document.getElementById("userEmail").value;
    var date = document.getElementById("dateInput").value;
    if (userEmail == ""|| !userEmail.checkValidity())
    {
        alert("please enter a valid email");
    }
    if (document.getElementById("dateInput").validity.valueMissing || document.getElementById("dateInput").checkValidity.rangeUnderflow)
    {
        alert("Please enter a valid date");
        return;
    }
    alert("Your data is Valid");
    
    var today = new Date();
    var dd = today.GetDay();
    var mm = today.getMonth() + 1;
    var yyyy =  today.getFullYear();

    if (dd < 10)
    {
        dd = '0' + dd;
    }
    if (mm < 10)
    {
        mm = "0" + mm;
    }
    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("dateInput").setAttribute("min", today);

    var textBox = document.getElementById("textBox").value;
    if (textBox != null)
    {
        alert(textBox);
    }
}

(function($) {
    "use strict";

    var $navbar = $("#navbar"),
        y_pos = $navbar.offset().top,
        height = $navbar.height();

    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > y_pos + height) {
            $navbar.addClass("navbar-fixed").animate({
                top: 0
            });
        } else if (scrollTop <= y_pos) {
            $navbar.removeClass("navbar-fixed").clearQueue().animate({
                top: "-48px"
            }, 0);
        }
    });

});
