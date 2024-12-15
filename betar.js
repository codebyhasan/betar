// Global variables
let currentAudio = null;
let currentButton = null;

const stations = [
  {
    category: "ঢাকা এএম (Dhaka AM)",
    channels: [
      { name: "ঢাকা-ক (৬৯৩ কিলোহার্জ)", stream: "https://as1.digitalsynapsebd.com/proxy/bbdkka/stream" },
      { name: "ঢাকা-খ (৮১৯ কিলোহার্জ)", stream: "https://as1.digitalsynapsebd.com/proxy/bbdkkha/stream" },
      { name: "বাণিজ্যিক কার্যক্রম (৬৩০ কিলোহার্জ)", stream: "https://as1.digitalsynapsebd.com/proxy/bbdkcom/stream" },
      { name: "বহির্বিশ্ব কার্যক্রম", stream: "https://as1.digitalsynapsebd.com/proxy/bbdkboh/stream" },
    ],
  },
  {
    category: "ঢাকা এফএম (Dhaka FM)",
    channels: [
      { name: "ট্রাফিক সম্প্রচার কার্যক্রম (৮৮-৮ মেগাহার্জ)", stream: "https://as1.digitalsynapsebd.com/proxy/bbdktraf/stream" },
      { name: "বাণিজ্যিক কার্যক্রম (১০৪ মেগাহার্জ)", stream: "https://as1.digitalsynapsebd.com/proxy/bbdkcom2/stream" },
      { name: "ঢাকা এফএম (৯০-০ মেগাহার্জ)", stream: "http://as1.digitalsynapsebd.com:8000/stream?type=http&nocache=155" },
    ],
  },
  {
    category: "চট্টগ্রাম (Chittagong)",
    channels: [
      { name: "এএম ৮৭৩ কিলোহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbctgmw/stream" },
      { name: "এফএম ৮৮-৮ মেগাহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbctgfm/stream" },
    ],
  },
  {
    category: "খুলনা (Khulna)",
    channels: [
      { name: "এএম ৫৫৮ কিলোহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbkulam/stream" },
      { name: "এফএম ৮৮-৮ মেগাহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbkulfm/stream" },
    ],
  },
  {
    category: "রাজশাহী (Rajshahi)",
    channels: [
      { name: "এএম ১০৮০ কিলোহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbrajmw/stream" },
      { name: "এফএম ৮৮-৮ মেগাহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbrajfm/stream" },
    ],
  },
  {
    category: "রংপুর (Rangpur)",
    channels: [
      { name: "এএম ১০৫৩ কিলোহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbranam/stream" },
      { name: "এফএম ৮৮-৮ মেগাহার্জ, ১০৫-৬ মেগাহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbranfm/stream" },
    ],
  },
  {
    category: "সিলেট (Sylhet)",
    channels: [
      { name: "এএম ৯৬৩ কিলোহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbsylham/stream" },
      { name: "এফএম ৮৮-৮ মেগাহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbsylhfm/stream" },
    ],
  },
  {
    category: "বরিশাল (Barisal)",
    channels: [
      { name: "এএম ১২৮৭ কিলোহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbbaram/stream" },
      { name: "এফএম ১০৫-২ মেগাহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbbarfm/stream" },
    ],
  },
  {
    category: "কক্সবাজার (Cox's Bazar)",
    channels: [
      { name: "এএম ১৩১৪ কিলোহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbcoxam/stream" },
      { name: "এফএম ১০০-৮ মেগাহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbcoxfm/stream" },
    ],
  },
  {
    category: "বান্দরবান (Bandarban)",
    channels: [
      { name: "এএম ১৪৩১ কিলোহার্জ", stream: "http://as1.digitalsynapsebd.com/proxy/bbbanam/stream" },
      { name: "এফএম ৯২-০ মেগাহার্জ", stream: "http://as1.digitalsynapsebd.com/proxy/bbbanfm/stream" },
    ],
  },
  {
    category: "ঠাকুরগাঁও (Thakurgaon)",
    channels: [
      { name: "এএম ৯৯৯ কিলোহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbthaam/stream" },
      { name: "এফএম ৯২-০ মেগাহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbthafm/stream" },
    ],
  },
  {
    category: "রাঙামাটি (Rangamati)",
    channels: [
      { name: "এএম ১১৬১ কিলোহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbrangam/stream" },
      { name: "এফএম ১০৩-২ মেগাহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbrangfm/stream" },
    ],
  },
  {
    category: "কুমিল্লা (Comilla)",
    channels: [
      { name: "এএম ১৪১৩ কিলোহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbcumam/stream" },
      { name: "এফএম ১০৩-৬ মেগাহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbcumfm/stream" },
    ],
  },
  {
    category: "ময়মনসিংহ (Mymensingh)",
    channels: [
      { name: "এফএম ৯২-০ মেগাহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbmymfm/stream" },
    ],
  },
  {
    category: "গোপালগঞ্জ (Gopalganj)",
    channels: [
      { name: "এফএম ৯২-০ মেগাহার্জ", stream: "https://as1.digitalsynapsebd.com/proxy/bbgopfm/stream" },
    ],
  },
  {
    category: "পরীক্ষামূলক (Experimental)",
    channels: [
      { name: "পরীক্ষামূলক", stream: "https://as1.digitalsynapsebd.com/proxy/experimental/stream" },
    ],
  },
];


// Load stations dynamically
const stationContainer = document.getElementById("radio-stations");

stations.forEach((station) => {
  const stationSection = document.createElement("div");
  stationSection.className = "station";

  const categoryTitle = document.createElement("h2");
  categoryTitle.textContent = station.category;

  stationSection.appendChild(categoryTitle);

  station.channels.forEach((channel) => {
    const channelElement = document.createElement("p");

    const playButton = document.createElement("button");
    playButton.textContent = channel.name; // Default to station name
    playButton.dataset.stationName = channel.name; // Store station name for easy reference
    playButton.dataset.streamUrl = channel.stream; // Store stream URL for easy reference
    playButton.onclick = () => toggleRadio(channel.stream, playButton);

    channelElement.appendChild(playButton);
    stationSection.appendChild(channelElement);
  });

  stationContainer.appendChild(stationSection);
});

// Toggle play/pause functionality
function toggleRadio(streamUrl, button) {
  // Stop the current audio if a new station is clicked
  if (currentAudio && currentAudio.src !== streamUrl) {
    currentAudio.pause();
    if (currentButton) {
      currentButton.textContent = currentButton.dataset.stationName; // Reset the previous button text
    }
    currentAudio = null;
    currentButton = null;
  }

  // If clicking the same button, toggle play/pause
  if (currentButton === button && currentAudio) {
    if (currentAudio.paused) {
      currentAudio.play();
      button.textContent = `Playing ${button.dataset.stationName}`;
    } else {
      currentAudio.pause();
      button.textContent = button.dataset.stationName;
    }
    return;
  }

  // Always reload and start playing the new stream
  currentAudio = new Audio(streamUrl);

  // Preload the stream before playing
  currentAudio.preload = "auto";
  currentAudio.play()
    .then(() => {
      button.textContent = `Playing ${button.dataset.stationName}`; // Update button text
      currentButton = button;
    })
    .catch(() => {
      button.textContent = `${button.dataset.stationName} - Not Available Now`; // Show error message on failure
      currentAudio = null;
      currentButton = null;
    });

  // Handle errors (e.g., stream not available)
  currentAudio.onerror = () => {
    button.textContent = `${button.dataset.stationName} - Not Available Now`;
    currentAudio = null;
    currentButton = null;
  };

  // Reset button when the stream ends
  currentAudio.onended = () => {
    button.textContent = button.dataset.stationName;
    currentAudio = null;
    currentButton = null;
  };
}

// Update copyright year dynamically
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("current-year");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
});
