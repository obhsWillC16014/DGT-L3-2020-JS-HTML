var database = firebase.database();
var usersRef = database.ref('Orders');

document.getElementById("submitButton").onclick = function () {
        let allAreFilled = true;
        var SaladList = [];
        document.getElementById("sandwich_form").querySelectorAll("[required]").forEach(function (i) {
                if (!allAreFilled) return;   
                if (!i.value) allAreFilled = false;
                if (i.type === "radio") {
                        let radioValueCheck = false;
                        document.getElementById("myForm").querySelectorAll(`[name=${i.name}]`).forEach(function (r) {
                                if (r.checked) radioValueCheck = true;
                        })
                        allAreFilled = radioValueCheck;
                }
        })
        var salads = document.getElementsByName('Salads');
        for(var i = 0; i < salads.length; ++i)
        {
                if (salads[i].checked)
                {
                        SaladList.push(salads[i].value + ' ');
                        alert(SaladList);
                }
        }
        if (!allAreFilled) {
                alert('Fill all the fields');
        }
        if (allAreFilled){
                var firstName = first_name.value;
                var lastName = last_name.value;
                var phoneNumber = phone_number.value;
                var sandwichSize = user_sandwich_size.value;
                var breadChoice = user_bread.value;
                var cheeseChoice = user_cheese.value;
                var meatChoice = user_meat.value;
                var saladChoice = SaladList;

                var data = {
                        First_Name:firstName,
                        Last_Name:lastName,
                        Phone:phoneNumber,
                        Size:sandwichSize,
                        Bread:breadChoice,
                        Cheese:cheeseChoice,
                        Meat:meatChoice,
                        Salad:saladChoice,
                }
                usersRef.push(data);
                location.reload();
        }
};