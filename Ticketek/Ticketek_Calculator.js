$("select").change(function() {
    var seatingLoc = $("input[name='Seating']:checked").val();
    if (user_ticket.value != null  && seatingLoc != undefined && user_ticket_quantity.value >= 1 && user_ticket_quantity.value <= 5){
        var numberOfTickets = user_ticket_quantity.value;
        var ticketSelected = $('#user_ticket').val(),
            ticketCost= parseFloat($('#user_ticket option:selected').data("ticketcost"));
        document.getElementById("order_message").style.display = "block"
        var seatingCost = parseFloat($("input[name='Seating']:checked").data("cost"));
        var finalCost = (ticketCost * numberOfTickets) + (seatingCost * numberOfTickets);
        UpdatePricingDOM(numberOfTickets, ticketSelected, ticketCost, seatingLoc, seatingCost, finalCost)
    }
    else {
        document.getElementById("order_message").style.display = "none"
    }
})

$("input").change(function() {
    var seatingLoc = $("input[name='Seating']:checked").val();
    if (user_ticket.value != null && seatingLoc != undefined && user_ticket_quantity.value >= 1 && user_ticket_quantity.value <= 5){
        var numberOfTickets = user_ticket_quantity.value;
        var ticketSelected = $('#user_ticket').val(),
            ticketCost= parseFloat($('#user_ticket option:selected').data("ticketcost"));
        document.getElementById("order_message").style.display = "block"
        var seatingCost = parseFloat($("input[name='Seating']:checked").data("cost"));
        var finalCost = (ticketCost * numberOfTickets) + (seatingCost * numberOfTickets);
        UpdatePricingDOM(numberOfTickets, ticketSelected, ticketCost, seatingLoc, seatingCost, finalCost)
    }
    else {
        document.getElementById("order_message").style.display = "none"
    }
})


function UpdatePricingDOM(OrderQuant, TicketOrder, TicketCost, SeatingOrder, SeatingCost,  TotalCost) {
    document.getElementById("order_message").innerHTML = 'Your order is:' + OrderQuant+"x" + ", " + TicketOrder +"," + SeatingOrder +"<br>Ticket Price:" + TicketCost + " x " + OrderQuant + " = " + "$" + TicketCost*OrderQuant + "<br>Seating Price: +"+SeatingCost + " x " + OrderQuant + " = " + "$" + SeatingCost* OrderQuant + "<br>Total Cost:"+ "$" +TotalCost;  
}