// Automatically fill location input with user's geolocation
document.addEventListener('DOMContentLoaded', function () {
    const locationInput = document.getElementById('locationInput');
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
  
        // Fetch the location name based on coordinates (optional)
        fetch(`https://geocode.xyz/${lat},${lon}?json=1`)
          .then(response => response.json())
          .then(data => {
            locationInput.value = data.city || "Masinga";
          })
          .catch(error => console.log('Geolocation error: ', error));
      }, function () {
        locationInput.value = "Masinga"; // Default location if geolocation fails
      });
    } else {
      locationInput.value = "Masinga"; // Fallback if geolocation is not supported
    }
  });
  