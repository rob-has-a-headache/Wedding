const wedDate = new Date("May 31, 2026 12:00:00").getTime(); // Set the wedding date and time

let x =setInterval(function() {
    var now = new Date().getTime(); // Get the current date and time
    var distance = wedDate - now; // Calculate the distance between now and the wedding date
    var days = Math.floor(distance / (1000 * 60 * 60 * 24)); // Calculate days
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Calculate hours
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); // Calculate minutes
    var seconds = Math.floor((distance % (1000 * 60)) / 1000); // Calculate seconds

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "; // Display the countdown
    if (distance < 0) { // If the countdown is over
        clearInterval(x); // Stop the countdown
        document.getElementById("countdown").innerHTML = "Wedding Day!"; // Display a message
    }
}, 1000); // Update the countdown every second