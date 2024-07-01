document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code here
    var maintenanceDate = new Date("May 15, 2023 12:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = maintenanceDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Maintenance is over";
    }
}, 1000);
    var myElement = document.getElementById("my-element");
    myElement.innerHTML = "Hello, World!";
  });
  // JavaScript code for website under maintenance

// Countdown timer for website maintenance

