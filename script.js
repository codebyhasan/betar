// Array of radio streams
const radioStations = [
    { name: "Station 1", url: "http://stream-url-1.com" },
    { name: "Station 2", url: "http://stream-url-2.com" },
    { name: "Station 3", url: "http://stream-url-3.com" },
    // Add all your 20+ stations here...
];

// DOM Elements
const radioList = document.getElementById('radio-list');
const radioPlayer = document.getElementById('radio-player');

// Function to create radio station list
function loadRadioStations() {
    radioStations.forEach(station => {
        const radioItem = document.createElement('div');
        radioItem.className = 'radio-item';
        radioItem.textContent = station.name;

        radioItem.addEventListener('click', () => {
            playStation(station.url);
        });

        radioList.appendChild(radioItem);
    });
}

// Function to play the selected station
function playStation(url) {
    radioPlayer.src = url;
    radioPlayer.play();
}

// Load radio stations on page load
loadRadioStations();
