document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });

            // Cleans the URL bar so the #ID doesn't show up
            window.history.pushState(null, null, ' ');
        }
    });
});

// Initialize the map centered on Garden Grove, CA
const map = L.map('map').setView([33.7743, -117.9380], 12);

// Add the OpenStreetMap tiles (the actual map image)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Define a Custom Icon
const myIcon = L.icon({
    iconUrl: 'assets/map-pin.png', // Ensure you have a pin image in your assets!
    iconSize: [38, 38], // Size of the pin
    iconAnchor: [19, 38], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, -35] // Point from which the popup should open relative to the iconAnchor
});

// Add the marker with your custom pin
L.marker([33.7743, -117.9380], {icon: myIcon})
    .addTo(map)
    .bindPopup('Based in Garden Grove, CA')
    .openPopup();