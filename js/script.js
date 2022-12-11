$(document).ready(function() {
    $("#submitBtn").click(function() {
        alert("Thank you for you message! We'll be back with you shortly!")
    });

    $("#openCards").click(function() {
        $(".card").slideToggle("slow");
    });
}) 