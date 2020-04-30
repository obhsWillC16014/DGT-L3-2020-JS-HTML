var database = firebase.database();
var usersRef = database.ref('Orders');

document.getElementById("submitButton").onclick = function () {
        let allAreFilled = true;
        document.getElementById("booking_form").querySelectorAll("[required]").forEach(function (i) {
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
                document.getElementById("error_message").style.display = "block";
        }
        if (allAreFilled){
                var firstName = first_name.value;
                var lastName = last_name.value;
                var phoneNumber = phone_number.value;
                var ticketChoice = user_ticket.value;
                var ticketQuantity = user_ticket_quantity.value;
                var seatingChoice = $("input[name='Seating']:checked").val();
                var ticketCost = parseFloat($('#user_ticket option:selected').data("ticketcost"));
                var seatingCost = parseFloat($("input[name='Seating']:checked").data("cost"));
                var finalCost = (ticketCost * ticketQuantity) + (seatingCost * ticketQuantity);

                var data = {
                        First_Name:firstName,
                        Last_Name:lastName,
                        Phone:phoneNumber,
                        Ticket:ticketChoice,
                        Ticket_Price:ticketCost,
                        Tickets_Ordered:ticketQuantity,
                        Seating:seatingChoice,
                        Seating_Price:seatingCost,
                        Total_Cost:finalCost,
                }
                usersRef.push(data);
        document.getElementById("error_message").style.display = "none";
        document.getElementById("success_message").style.display = "block";
        window.setTimeout(pageReload, 3000);
        }
};

function pageReload() {
        location.reload();
    }