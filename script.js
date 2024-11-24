const radioList = document.getElementById('radio-list');
const radioPlayer = document.getElementById('radio-player');

// Function to fetch and parse the streams.txt file
async function loadRadioStations() {
    try {
        const response = await fetch('streams.txt');
        const data = await response.text();
        parseRadioData(data);
    } catch (error) {
        console.error('Error loading radio streams:', error);
        radioList.innerHTML = '<p>Failed to load radio stations. Please try again later.</p>';
    }
}

// Parse the content of streams.txt
function parseRadioData(data) {
    const lines = data.split('\n');
    let currentCategory = '';

    lines.forEach(line => {
        if (line.trim() === '') return; // Skip empty lines

        if (!line.includes(':')) {
            // If the line is a category
            currentCategory = line.trim();
            const categoryHeader = document.createElement('h3');
            categoryHeader.textContent = currentCategory;
            radioList.appendChild(categoryHeader);
        } else {
            // If the line is a station
            const [title, url] = line.split(':').map(item => item.trim());
            const radioItem = document.createElement('div');
            radioItem.className = 'radio-item';
            radioItem.textContent = title;

            radioItem.addEventListener('click', () => playStation(url));
            radioList.appendChild(radioItem);
        }
    });
}

// Play the selected station
function playStation(url) {
    radioPlayer.src = url;
    radioPlayer.play();
}

// Load stations on page load
loadRadioStations();
