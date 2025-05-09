const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    category: "Iconic City",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.7797, 34.0305] },
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "Iconic City",
    geometry: { type: "Point", coordinates: [-74.006, 40.7128] },
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "Mountain",
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] },
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    category: "Mountain",
    country: "Italy",
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] },
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "Iconic City",
    geometry: { type: "Point", coordinates: [-122.6765, 45.5231] },
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    category: "Beach",
    country: "Mexico",
    geometry: { type: "Point", coordinates: [-86.8431, 21.1619] },
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: "Beach",
    geometry: { type: "Point", coordinates: [-120.0324, 39.0968] },
  },
  {
    "title": "Ski Chalet in Aspen",
    "description": "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 4000,
    "location": "Aspen",
    category: "Iconic City",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.817547,
        39.191089
      ]
    }
  },
  {
    "title": "Secluded Beach House in Costa Rica",
    "description": "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1800,
    "location": "Costa Rica",
    "country": "Costa Rica",
    category: "Beach",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -84.091667,
        9.928069
      ]
    }
  },
  {
    "title": "Historic Cottage in Charleston",
    "description": "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1600,
    "location": "Charleston",
    "country": "United States",
    category: "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -79.9310512,
        32.7764749
      ]
    }
  },
  {
    "title": "Modern Apartment in Tokyo",
    "description": "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 2000,
    "location": "Tokyo",
    "country": "Japan",
    category: "Iconic City",
    "geometry": {
      "type": "Point",
      "coordinates": [
        139.691706,
        35.689487
      ]
    }
  },
  {
    "title": "Lakefront Cabin in New Hampshire",
    "description": "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1200,
    "location": "New Hampshire",
    "country": "United States",
    category: "Mountain",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -71.572395,
        43.193852
      ]
    }
  },
  {
    "title": "Luxury Villa in the Maldives",
    "description": "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 6000,
    "location": "Maldives",
    "country": "Maldives",
    category: "Beach",
    "geometry": {
      "type": "Point",
      "coordinates": [
        73.22068,
        3.202778
      ]
    }
  },
  {
    "title": "Tropical Villa in Phuket",
    "description": "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 3000,
    "location": "Phuket",
    category: "Beach",
    "country": "Thailand",
    "geometry": {
      "type": "Point",
      "coordinates": [
        98.3981029,
        7.9519004
      ]
    }
  },
  {
    "title": "Historic Castle in Scotland",
    "description": "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 4000,
    "location": "Scottish Highlands",
    "country": "United Kingdom",
    category: "Iconic City",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -4.5,
        57.4
      ]
    }
  },
  {
    "title": "Desert Oasis in Dubai",
    "description": "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 5000,
    "location": "Dubai",
    "country": "United Arab Emirates",
    category: "Beach",
    "geometry": {
      "type": "Point",
      "coordinates": [
        55.304722,
        25.258167
      ]
    }
  },
  {
    "title": "Rustic Log Cabin in Montana",
    "description": "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1100,
    "location": "Montana",
    category: "Camping",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.4454,
        46.8796
      ]
    }
  },
  {
    "title": "Beachfront Villa in Greece",
    "description": "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 2500,
    "location": "Mykonos",
    category: "Beach",
    "country": "Greece",
    "geometry": {
      "type": "Point",
      "coordinates": [
        25.328494,
        37.645258
      ]
    }
  },
  {
    "title": "Eco-Friendly Treehouse Retreat",
    "description": "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 750,
    "location": "Costa Rica",
    category: "Camping",
    "country": "Costa Rica",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -84.091667,
        9.928069
      ]
    }
  },
  {
    "title": "Historic Brownstone in Boston",
    "description": "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 2200,
    "location": "Boston",
    category: "Camping",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -71.0582912,
        42.3602534
      ]
    }
  },
  {
    "title": "Private Island Retreat",
    "description": "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 10000,
    "location": "Fiji",
    category: "Camping",
    "country": "Fiji",
    "geometry": {
      "type": "Point",
      "coordinates": [
        177.156097,
        -17.713371
      ]
    }
  },
];
module.exports = { data: sampleListings };