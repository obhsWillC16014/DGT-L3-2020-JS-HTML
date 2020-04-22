var database = firebase.database();
var usersRef = database.ref('users');

document.getElementById("submitButton").onclick = function () {
        let allAreFilled = true;
        document.getElementById("contact_form").querySelectorAll("[required]").forEach(function (i) {
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
        if (!allAreFilled) {
                alert('Fill all the fields');
        }
        if (allAreFilled){
                var firstName = first_name.value;
                var lastName = last_name.value;
                var userEmail = user_email.value;
                var phoneNumber = phone_number.value;
                var userAddress = user_address.value;
                var userCity = user_city.value;
                var userRegion = user_region.value;
                var userZip = user_zip.value;
                var domainName = user_domain_name.value;
                var hasHosting = user_hosting.value;
                var projectDescription = project_description.value;

                var data = {
                        First_Name:firstName,
                        Last_Name:lastName,
                        Email:userEmail,
                        Phone:phoneNumber,
                        Address:userAddress,
                        City:userCity,
                        Region:userRegion,
                        Zip_Code:userZip,
                        Domain:domainName,
                        Hosting:hasHosting,
                        Description:projectDescription
                }
                usersRef.push(data);

                location.reload();
        }
};