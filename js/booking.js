document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const destination = urlParams.get('destination');
  const isEdit = urlParams.get('edit') === 'true';
  const index = urlParams.get('index');
  

  const destinations = {
    Kerala: {
      title: 'Kerala - 5 Days',
      image: 'css/img/Kerala.jpg',
      overview: `
        <h3>OVERVIEW:</h3>
        <p>Discover the enchanting beauty of Kerala with Drift Destiny. Known as "God's Own Country," Kerala offers a rich tapestry of landscapes from palm-lined beaches and lush jungles to serene backwaters and spice plantations. This 5-day tour provides a perfect blend of relaxation and adventure, showcasing the best of what Kerala has to offer. Join us as we explore iconic landmarks, savor local flavors, and immerse ourselves in the cultural heritage of this beautiful state. Our tour promises comfortable stays, expert guides, and an authentic Kerala experience that will leave you with memories to last a lifetime.</p>
      `,
      itinerary: `
        <h3>ITINERARY:</h3>
        <ul>
          <li>DAY 1 - Visit Athirappilly Waterfalls, Charpa Waterfalls, and Vazhachal Waterfalls.</li>
          <li>DAY 2 - Explore the Elephant Arrival Spot, enjoy a Kathakali and Martial Arts Show, and stay in Munnar.</li>
          <li>DAY 3 - Discover Mattupetty Dam, Echo Point, Spice Plantations, Tea Estates, and Tea Museums.</li>
          <li>DAY 4 - Relax at Alleppey Beach, visit Alleppey Lighthouse, cruise the Alleppey Backwaters, and stay on a houseboat.</li>
          <li>DAY 5 - Tour Kochi Fort, visit Saint Francis Church and Jew Street, then return.</li>
        </ul>
      `
    },
    Shimla: {
      title: 'Shimla - 6 Days',
      image: 'css/img/Shimla.jpeg',
      overview: `
        <h3>OVERVIEW:</h3>
        <p>Explore the serene beauty of Shimla with Drift Destiny. Nestled in the Himalayan foothills, Shimla is known for its colonial architecture, scenic beauty, and vibrant culture. This 6-day tour offers a delightful mix of relaxation and adventure, perfect for nature lovers and history enthusiasts alike. From picturesque landscapes and historical landmarks to bustling markets and local delicacies, Shimla has something for everyone. Join us on this journey to experience the charm and tranquility of one of India's most beloved hill stations.</p>
      `,
      itinerary: `
        <h3>ITINERARY:</h3>
        <ul>
          <li>DAY 1 - Journey to Shimla (approx 8 hours) | Stay in Shimla.</li>
          <li>DAY 2 - Visit Kufri, Mall Road, Ridge Point, and Christ Church.</li>
          <li>DAY 3 - Explore Jakhoo Temple, Viceregal Lodge, and Annandale.</li>
          <li>DAY 4 - Discover Chadwick Falls, Himachal State Museum, and The Ridge.</li>
          <li>DAY 5 - Day trip to Chail, Kali Tibba, and Chail Palace.</li>
          <li>DAY 6 - Leisure time in Shimla, shopping at Lakkar Bazaar, and return.</li>
        </ul>
      `
    },
    Gokarna: {
      title: 'Gokarna - 4 Days',
      image: 'css/img/Gokarna.jpg',
      overview: `
        <h3>OVERVIEW:</h3>
        <p>Unwind in the tranquil town of Gokarna with Drift Destiny. Known for its pristine beaches and laid-back atmosphere, Gokarna is the perfect destination for a relaxing getaway. This 4-day tour offers a serene escape from the hustle and bustle of daily life. Enjoy the sun, sand, and sea as we explore Gokarna's beautiful beaches, ancient temples, and charming local culture. Whether you're looking to relax or explore, this tour has something for everyone.</p>
      `,
      itinerary: `
        <h3>ITINERARY:</h3>
        <ul>
          <li>DAY 1 - Arrival in Gokarna | Relax at Om Beach.</li>
          <li>DAY 2 - Explore Kudle Beach and Half Moon Beach.</li>
          <li>DAY 3 - Visit Gokarna Beach, Mahabaleshwar Temple, and Paradise Beach.</li>
          <li>DAY 4 - Enjoy the serene beauty of Nirvana Beach and depart.</li>
        </ul>
      `
    },
    Araku: {
      title: 'Araku - 4 Days',
      image: 'css/img/Araku.jpg',
      overview: `
        <h3>OVERVIEW:</h3>
        <p>Discover the picturesque beauty of Araku Valley with Drift Destiny. Surrounded by coffee plantations and lush green hills, Araku is a hidden gem in Andhra Pradesh. This 4-day tour offers an escape into nature's lap, perfect for those seeking tranquility and scenic beauty.
        From exploring stunning caves and waterfalls to experiencing the rich tribal culture, Araku promises a refreshing and enriching experience. Join us on this journey to reconnect with nature and explore the unique charm of this beautiful valley.
        </p>
      `,
      itinerary: `
        <h3>ITINERARY:</h3>
        <ul>
        <li>DAY 1 - Arrival in Araku | Visit Padmapuram Gardens.</li>
        <li>DAY 2 - Explore Borra Caves and Ananthagiri Hills.</li>
        <li>DAY 3 - Visit Tribal Museum, Dumbriguda Waterfalls, and Coffee Plantations.</li>
        <li>DAY 4 - Enjoy Chaparai Waterfalls and depart.</li>
        </ul>
      `
    },

    Goa: {
      title: 'Goa - 5 Days',
      image: 'css/img/Goa.jpg',
      overview: `
        <h3>OVERVIEW:</h3>
        <p>Experience the vibrant culture and stunning beaches of Goa with Drift Destiny. Known for its lively atmosphere and rich heritage, Goa is the ultimate vacation destination. This 5-day tour promises a mix of relaxation and excitement, perfect for sun-seekers and culture enthusiasts alike.
        From exploring historical sites and indulging in water sports to relaxing on beautiful beaches, Goa offers a diverse range of experiences. Join us for a memorable journey through one of India's most beloved travel destinations.
        </p>
      `,
      itinerary: `
        <h3>ITINERARY:</h3>
        <ul>
          <li>DAY 1 - Arrival in Goa | Relax at Calangute Beach.</li>
          <li>DAY 2 - Explore Baga Beach, Anjuna Beach, and Vagator Beach.</li>
          <li>DAY 3 - DAY 3 - Visit Fort Aguada, Basilica of Bom Jesus, and Se Cathedral.</li>
          <li>DAY 4 - Discover Dudhsagar Falls and Spice Plantations.</li>
          <li>DAY 5 - Enjoy a leisurely day at Palolem Beach and depart.</li>
        </ul>
      `
    },

    Hampi: {
      title: 'Hampi - 3 Days',
      image: 'css/img/Hampi.jpg',
      overview: `
        <h3>OVERVIEW:</h3>
        <p>Step back in time with a visit to the ancient city of Hampi with Drift Destiny. Known for its stunning ruins and temples, Hampi is a UNESCO World Heritage site. This 3-day tour offers a glimpse into history and heritage, perfect for history buffs and cultural enthusiasts.
        Explore the magnificent architectural marvels and immerse yourself in the rich history of the Vijayanagara Empire. Join us on this journey to discover the timeless beauty of Hampi.
        </p>
      `,
      itinerary: `
        <h3>ITINERARY:</h3>
        <ul>
        <li>DAY 1 - Arrival in Hampi | Explore Virupaksha Temple and Hemakuta Hill.</li>
        <li>DAY 2 - Visit Vijaya Vittala Temple, Lotus Mahal, and Hampi Bazaar.</li>
        <li>DAY 3 - Discover the Elephant Stables, Queen's Bath, and depart.</li>
        </ul>
      `
    },

    Kedarnath: {
      title: ' Kedarnath - 6 Days',
      image: 'css/img/Kedarnath.jpeg',
      overview: `
        <h3>OVERVIEW:</h3>
        <p>Embark on a spiritual journey to Kedarnath with Drift Destiny. Nestled in the Himalayas, Kedarnath is one of the holiest pilgrimages in India. This 6-day tour promises a serene and uplifting experience, perfect for spiritual seekers and nature lovers.
        From the majestic Kedarnath Temple to the scenic trails and stunning landscapes, this tour offers a perfect blend of spirituality and adventure. Join us for a journey that promises to rejuvenate your mind, body, and soul.
        </p>
      `,
      itinerary: `
        <h3>ITINERARY:</h3>
        <ul>
        <li>DAY 1 - Arrival in Rishikesh | Visit Triveni Ghat and Laxman Jhula.</li>
        <li>DAY 2 - Travel to Guptkashi | Visit Ardh Narishwar Temple.</li>
        <li>DAY 3 - Trek to Kedarnath | Visit Kedarnath Temple.</li>
        <li>DAY 4 - Explore Kedarnath | Trek back to Guptkashi.</li>
        <li>DAY 5 - Travel to Rishikesh | Visit Neelkanth Mahadev Temple.</li>
        <li>DAY 6 - Leisure time in Rishikesh | Depart.</li>
        </ul>
      `
    },

    CharDhamYatra: {
      title: 'CharDhamYatra - 10 Days',
      image: 'css/img/CharDhamYatra.jpg',
      overview: `
        <h3>OVERVIEW:</h3>
        <p>Experience the sacred Char Dham Yatra with Drift Destiny. This holy pilgrimage covers Yamunotri, Gangotri, Kedarnath, and Badrinath. This 10-day tour offers a profound spiritual journey, perfect for devout pilgrims and seekers of peace.
        Travel through the majestic Himalayas, visit ancient temples, and immerse yourself in the spiritual aura of these revered sites. Join us for a once-in-a-lifetime pilgrimage that will leave you spiritually enriched and rejuvenated.
        </p>
      `,
      itinerary: `
        <h3>ITINERARY:</h3>
        <ul>
        <li>DAY 1 - Arrival in Haridwar | Evening Ganga Aarti.</li>
        <li>DAY 2 - Travel to Barkot | Visit Kempty Falls en route.</li>
        <li>DAY 3 - Yamunotri Darshan | Return to Barkot.</li>
        <li>DAY 4 - Travel to Uttarkashi | Visit Vishwanath Temple.</li>
        <li>DAY 5 - Gangotri Darshan | Return to Uttarkashi.
        <li>DAY 6 - Travel to Guptkashi | Visit Ardh Narishwar Temple.</li>
        <li>DAY 7 - Trek to Kedarnath | Kedarnath Darshan.</li>
        <li>DAY 8 - Trek back to Guptkashi | Travel to Badrinath.</li>
        <li>DAY 9 - Badrinath Darshan | Visit Mana Village.</li>
        <li>DAY 10 - Travel to Haridwar | Depart.</li>
        </ul>
      `
    },

    Pondicherry: {
      title: 'Pondicherry - 4 Days',
      image: 'css/img/Pondicherry.jpg',
      overview: `
        <h3>OVERVIEW:</h3>
        <p>Explore the charming town of Pondicherry with Drift Destiny. Known for its French colonial architecture and serene beaches, Pondicherry is a perfect blend of culture and relaxation. This 4-day tour ensures a delightful escape, ideal for history buffs and beach lovers alike.
        Stroll through the picturesque streets, relax on tranquil beaches, and savor delicious cuisine as we explore the unique charm of Pondicherry. Join us for a memorable journey that offers both relaxation and cultural enrichment.
        </p>
      `,
      itinerary: `
        <h3>ITINERARY:</h3>
        <ul>
          <li>DAY 1 - Arrival in Pondicherry | Explore Promenade Beach.</li>
          <li>DAY 2 - Visit Auroville, Matrimandir, and Serenity Beach.</li>
          <li>DAY 3 - Discover French Quarter, Basilica of the Sacred Heart of Jesus, and Paradise Beach.</li>
          <li>DAY 4 - Enjoy the local markets and cafes | Depart.</li>
        </ul>
      `
    },

    Ooty: {
      title: 'Ooty - 5 Days',
      image: 'css/img/Ooty.jpg',
      overview: `
        <h3>OVERVIEW:</h3>
        <p>Discover the picturesque hill station of Ooty with Drift Destiny. Nestled in the Nilgiri Hills, Ooty is known for its tea gardens, lakes, and charming colonial architecture. This 5-day tour offers a refreshing retreat, perfect for nature lovers and those seeking a peaceful escape.
        Explore the serene landscapes, visit iconic landmarks, and experience the local culture of this beautiful hill station. Join us for a rejuvenating journey through the tranquil beauty of Ooty.
        </p>
      `,
      itinerary: `
        <h3>ITINERARY:</h3>
        <ul>
          <li>DAY 1 - Arrival in Ooty | Visit Ooty Lake and Boat House.</li>
          <li>DAY 2 - Explore Botanical Gardens, Rose Garden, and Doddabetta Peak.</li>
          <li>DAY 3 - Visit Pykara Lake, Pykara Falls, and Pine Forest.</li>
          <li>DAY 4 - Discover Tea Museum, Wenlock Downs, and Avalanche Lake.</li>
          <li> DAY 5 - Leisure time at local markets | Depart.</li>
        </ul>
      `
    },

    Wayanad: {
      title: 'Wayanad - 4 Days',
      image: 'css/img/Wayanad.jpg',
      overview: `
        <h3>OVERVIEW:</h3>
        <p>Immerse yourself in the lush landscapes of Wayanad with Drift Destiny. Known for its wildlife, waterfalls, and caves, Wayanad is a nature lover's paradise. This 4-day tour promises a serene escape, perfect for adventure seekers and those looking to reconnect with nature.
        Explore dense forests, discover stunning waterfalls, and experience the rich biodiversity of this beautiful region. Join us for an unforgettable journey through the natural wonders of Wayanad.
        </p>
      `,
      itinerary: `
        <h3>ITINERARY:</h3>
        <ul>
          <li>DAY 1 - Arrival in Wayanad | Visit Edakkal Caves.</li>
          <li>DAY 2 - Explore Wayanad Wildlife Sanctuary and Pookode Lake.</li>
          <li>DAY 3 - Discover Soochipara Falls, Banasura Sagar Dam, and Kuruva Island.</li>
          <li>DAY 4 - DAY 4 - Enjoy local spice plantations and tea estates | Depart.</li>
        </ul>
      `
    },

    Coorg: {
      title: 'Coorg - 5 Days',
      image: 'css/img/Coorg.jpg',
      overview: `
        <h3>OVERVIEW:</h3>
        <p>Experience the tranquil beauty of Coorg with Drift Destiny. Known for its coffee plantations, lush forests, and scenic views, Coorg is a perfect getaway. This 5-day tour offers relaxation and adventure, ideal for nature enthusiasts and those seeking a refreshing retreat.
        Wander through sprawling coffee estates, visit picturesque waterfalls, and immerse yourself in the serene ambiance of this beautiful region. Join us for a rejuvenating journey through the captivating landscapes of Coorg.
        </p>
      `,
      itinerary: `
        <h3>ITINERARY:</h3>
        <ul>
          <li>DAY 1 - Arrival in Coorg | Visit Abbey Falls.</li>
          <li>DAY 2 - Explore Dubare Elephant Camp, Nisargadhama, and Tibetan Monastery.</li>
          <li>DAY 3 - Discover Raja’s Seat, Madikeri Fort, and Omkareshwara Temple.</li>
          <li>DAY 4 - Visit Talakaveri, Bhagamandala, and Coffee Plantations.</li>
          <li>DAY 5 - Enjoy a leisurely day at local markets | Depart.</li>
        </ul>
      `
    },
  };

  if (destinations[destination]) {
    document.getElementById('destination-title').innerHTML = `<h2>${destinations[destination].title}</h2>`;
    document.getElementById('destination-image').src = destinations[destination].image;
    document.getElementById('overview').innerHTML = destinations[destination].overview;
    document.getElementById('itinerary').innerHTML = destinations[destination].itinerary;
  }

  if (isEdit) {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const booking = bookings[index];

    document.getElementById('title').value = booking.title;
    document.getElementById('first-name').value = booking.firstName;
    document.getElementById('last-name').value = booking.lastName;
    document.getElementById('travel-date').value = booking.travelDate;
    document.getElementById('travellers').value = booking.numTravelers;
    document.getElementById('mobile-number').value = booking.mobile;
    document.getElementById('email-id').value = booking.email;

    const additionalTravellersDiv = document.getElementById('additional-travellers');
    additionalTravellersDiv.innerHTML = ''; 

    for (let i = 2; i <= booking.numTravelers; i++) {
      const travellerDiv = document.createElement('div');
      travellerDiv.className = 'form-group';
      travellerDiv.innerHTML = `
        <label for="traveller-${i}-name">Traveller ${i} Name</label>
        <input type="text" id="traveller-${i}-name" name="traveller-${i}-name" value="${booking[`traveller-${i}-name`] || ''}" required>
      `;
      additionalTravellersDiv.appendChild(travellerDiv);
    }
  }

  document.getElementById('travellers').addEventListener('change', function() {
    const numTravellers = this.value;
    const additionalTravellers = document.getElementById('additional-travellers');
    additionalTravellers.innerHTML = '';

    for (let i = 2; i <= numTravellers; i++) {
      const travellerDiv = document.createElement('div');
      travellerDiv.className = 'form-group';
      travellerDiv.innerHTML = `
        <label for="traveller-${i}-name">Traveller ${i} Name</label>
        <input type="text" id="traveller-${i}-name" name="traveller-${i}-name" required>
      `;
      additionalTravellers.appendChild(travellerDiv);
    }
  });

  document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const bookingDetails = {
      destination: destination,
      title: document.getElementById('title').value,
      firstName: document.getElementById('first-name').value,
      lastName: document.getElementById('last-name').value,
      travelDate: document.getElementById('travel-date').value,
      numTravelers: document.getElementById('travellers').value,
      mobile: document.getElementById('mobile-number').value,
      email: document.getElementById('email-id').value
    };

    for (let i = 2; i <= bookingDetails.numTravelers; i++) {
      bookingDetails[`traveller-${i}-name`] = document.getElementById(`traveller-${i}-name`).value;
    }

    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

    if (isEdit) {
      bookings[index] = bookingDetails;
    } else {
      bookings.push(bookingDetails);
    }

    localStorage.setItem('bookings', JSON.stringify(bookings));
    window.location.href = 'managevacations.html';
  });
});