// Hotel Rooms Data
const roomsData = [
  {
    id: 1,
    name: "Deluxe Ocean View",
    category: "Deluxe",
    price: "BDT 4,429",
    guests: 2,
    beds: 1,
    image: "room/room1.png",
    description: "Spacious room with panoramic ocean views, king-size bed, and modern amenities.",
    features: [
      "Ocean View",
      "King Size Bed",
      "Air Conditioning",
      "Free Wi-Fi",
      "Mini Bar",
      "Safe Deposit Box"
    ],
    size: "35 sqm",
    view: "Ocean View"
  },
  {
    id: 2,
    name: "Executive Suite",
    category: "Suite",
    price: "BDT 7,579",
    guests: 4,
    beds: 2,
    image: "room/room2.png",
    description: "Luxurious suite with separate living area, premium amenities, and breathtaking views.",
    features: [
      "Ocean View",
      "Separate Living Room",
      "King Size Bed",
      "Sofa Bed",
      "Air Conditioning",
      "Free Wi-Fi",
      "Mini Bar",
      "Safe Deposit Box",
      "Work Desk"
    ],
    size: "65 sqm",
    view: "Ocean View"
  },
  {
    id: 3,
    name: "Family Beach House",
    category: "Family",
    price: "BDT 9,999",
    guests: 6,
    beds: 3,
    image: "room/room3.png",
    description: "Perfect for families, with multiple bedrooms, kitchenette, and direct beach access.",
    features: [
      "Beach Access",
      "3 Bedrooms",
      "Kitchenette",
      "Living Area",
      "Air Conditioning",
      "Free Wi-Fi",
      "Mini Bar",
      "Safe Deposit Box",
      "Work Desk",
      "Balcony"
    ],
    size: "120 sqm",
    view: "Beach & Ocean View"
  }
];

// Hotel Amenities Data
const amenitiesData = [
  {
    id: 1,
    name: "Free Wi-Fi",
    description: "High-speed internet throughout the property",
    icon: "fas fa-wifi"
  },
  {
    id: 2,
    name: "Swimming Pools",
    description: "Indoor and outdoor pools with ocean views",
    icon: "fas fa-swimming-pool"
  },
  {
    id: 3,
    name: "Restaura & Bar",
    description: "Fine dining with local and international cuisine",
    icon: "fas fa-utensils"
  },
  {
    id: 4,
    name: "Spa & Wellness",
    description: "Relaxing treatments and wellness services",
    icon: "fas fa-spa"
  },
  {
    id: 5,
    name: "Fitness Center",
    description: "Modern gym equipment with personal trainers",
    icon: "fas fa-dumbbell"
  },
  {
    id: 6,
    name: "Parking",
    description: "Secure parking facilities available",
    icon: "fas fa-parking"
  },
  {
    id: 7,
    name: "24/7 Service",
    description: "Round-the-clock concierge and room service",
    icon: "fas fa-concierge-bell"
  },
  {
    id: 8,
    name: "Accessible",
    description: "Fully accessible facilities for all guests",
    icon: "fas fa-wheelchair"
  }
];

// Function to render rooms dynamically
function renderRooms() {
  const roomsContainer = document.getElementById('rooms-max-w-7xl px-2');
  if (!roomsContainer) return;
  
  roomsContainer.innerHTML = roomsData.map(room => `
    <div class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <div class="relative overflow-hidden h-64">
        <img src="${room.image}" 
             alt="${room.name}" 
             class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
        <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span class="text-sm font-semibold text-gray-800">${room.category}</span>
        </div>
      </div>
      <div class="p-2 lg:p-5">
        <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3">${room.name}</h3>
        <p class="text-sm sm:text-base text-gray-600 mb-4">${room.description}</p>
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
          <div class="flex items-center space-x-4 text-xs sm:text-sm text-gray-600">
            <span><i class="fas fa-users mr-1"></i> ${room.guests} Guests</span>
            <span><i class="fas fa-bed mr-1"></i> ${room.beds} Beds</span>
          </div>
          <div class="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">${room.price}</div>
        </div>
        <button onclick="showRoomDetails(${room.id})" class="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 text-sm sm:text-base font-semibold">
          View Details
        </button>
      </div>
    </div>
  `).join('');
}

// Function to show room details modal
function showRoomDetails(roomId) {
  const room = roomsData.find(r => r.id === roomId);
  if (!room) return;
  
  const modal = document.getElementById('room-modal');
  const modalContent = document.getElementById('modal-room-content');
  
  modalContent.innerHTML = `
    <div class="grid md:grid-cols-2 gap-8">
      <div>
        <img src="${room.image}" alt="${room.name}" class="w-full h-64 object-cover rounded-lg mb-4">
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-blue-50 p-3 rounded-lg">
            <p class="text-sm text-gray-600">Size</p>
            <p class="font-semibold text-gray-800">${room.size}</p>
          </div>
          <div class="bg-blue-50 p-3 rounded-lg">
            <p class="text-sm text-gray-600">View</p>
            <p class="font-semibold text-gray-800">${room.view}</p>
          </div>
        </div>
      </div>
      <div>
        <h3 class="text-3xl font-bold text-gray-800 mb-2">${room.name}</h3>
        <div class="flex items-center space-x-4 mb-4">
          <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">${room.category}</span>
          <span class="text-2xl font-bold text-blue-600">${room.price}</span>
        </div>
        <p class="text-gray-600 mb-6">${room.description}</p>
        
        <div class="mb-6">
          <h4 class="font-semibold text-gray-800 mb-3">Room Features</h4>
          <div class="grid grid-cols-2 gap-2">
            ${room.features.map(feature => `
              <div class="flex items-center space-x-2">
                <i class="fas fa-check text-green-500"></i>
                <span class="text-sm text-gray-600">${feature}</span>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="flex items-center space-x-4 mb-6">
          <div class="flex items-center space-x-2">
            <i class="fas fa-users text-blue-600"></i>
            <span class="text-sm text-gray-600">${room.guests} Guests</span>
          </div>
          <div class="flex items-center space-x-2">
            <i class="fas fa-bed text-blue-600"></i>
            <span class="text-sm text-gray-600">${room.beds} Beds</span>
          </div>
        </div>
        
        <div class="flex space-x-4">
          <a href="#contact" onclick="closeModal()">
            <button class="flex-1 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 px-4">
              <i class="fas fa-phone mr-2"></i>
              Contact Us for Booking
            </button>
          </a>
          <button onclick="closeModal()" class="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Close
          </button>
        </div>
      </div>
    </div>
  `;
  
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

// Function to close modal
function closeModal() {
  const modal = document.getElementById('room-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// Function to render amenities dynamically
function renderAmenities() {
  const amenitiesContainer = document.getElementById('amenities-container');
  if (!amenitiesContainer) return;
  
  amenitiesContainer.innerHTML = amenitiesData.map(amenity => `
    <div class="text-center group">
      <div
        class="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300"
      >
        <i
          class="${amenity.icon} text-2xl sm:text-3xl text-blue-600 group-hover:text-white"
        ></i>
      </div>
      <h3 class="text-base sm:text-lg font-semibold text-gray-800 mb-2">
        ${amenity.name}
      </h3>
      <p class="text-xs sm:text-sm text-gray-600">
        ${amenity.description}
      </p>
    </div>
  `).join('');
}

// Initialize rooms and amenities on page load
document.addEventListener('DOMContentLoaded', () => {
  renderRooms();
  renderAmenities();
});

// Close modal when clicking outside
document.addEventListener('click', (e) => {
  const modal = document.getElementById('room-modal');
  if (e.target === modal) {
    closeModal();
  }
});
