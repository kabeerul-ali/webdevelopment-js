// You can add this script to show the loader when a specific action is performed
document.addEventListener("DOMContentLoaded", function() {
    // Show the loader
    document.querySelector(".loader").style.display = "block";
    
    // Simulate a delay to show the loader
    setTimeout(function() {
      // Hide the loader
      document.querySelector(".loader").style.display = "none";
    }, 3000); // 3 seconds
  });