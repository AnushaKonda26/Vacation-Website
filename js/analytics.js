window.onload = function() {
  // Dummy bookings data: total bookings per month for each location
  const monthlyBookings = {
    'Kerala': [5, 8, 3, 4, 7, 2, 9, 6, 10, 5, 4, 8],
    'Shimla': [3, 4, 5, 6, 7, 8, 9, 5, 4, 6, 8, 9],
    'Gokarna': [7, 5, 6, 7, 5, 4, 6, 7, 5, 6, 7, 5],
    'Araku': [4, 3, 5, 6, 7, 4, 5, 6, 4, 5, 6, 7],
    'Goa': [10, 12, 8, 9, 11, 10, 9, 8, 10, 11, 9, 8],
    'Hampi': [5, 4, 6, 7, 8, 5, 6, 7, 8, 5, 6, 7],
    'Kedarnath': [2, 3, 4, 5, 6, 3, 4, 5, 6, 3, 4, 5],
    'Char Dham Yatra': [8, 7, 9, 10, 11, 8, 9, 10, 11, 8, 9, 10],
    'Pondicherry': [3, 4, 3, 4, 5, 3, 4, 5, 3, 4, 5, 3],
    'Ooty': [6, 7, 5, 6, 7, 6, 7, 5, 6, 7, 6, 7],
    'Wayanad': [5, 4, 3, 2, 4, 5, 3, 2, 4, 5, 3, 2],
    'Coorg': [4, 5, 6, 4, 5, 6, 4, 5, 6, 4, 5, 6]
  };

  const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
  const allDestinations = Object.keys(monthlyBookings);

  // Add actual bookings data to dummy data
  bookings.forEach(booking => {
    const destination = booking.destination;
    const month = new Date(booking.travelDate).getMonth();
    if (monthlyBookings[destination]) {
      monthlyBookings[destination][month] += 1;
    } else {
      monthlyBookings[destination] = new Array(12).fill(0);
      monthlyBookings[destination][month] = 1;
    }
  });

  // Popular Destinations Data
  const destinationCounts = allDestinations.reduce((acc, destination) => {
    acc[destination] = monthlyBookings[destination].reduce((sum, count) => sum + count, 0);
    return acc;
  }, {});

  const destinationLabels = Object.keys(destinationCounts);
  const destinationData = Object.values(destinationCounts);

  // Seasonal Trends Data
  const monthLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthCounts = monthLabels.map((_, monthIndex) => {
    return allDestinations.reduce((sum, destination) => sum + monthlyBookings[destination][monthIndex], 0);
  });

  // Popular Destinations Chart
  const ctx1 = document.getElementById('popularDestinationsChart').getContext('2d');
  const popularDestinationsChart = new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: destinationLabels,
      datasets: [{
        label: 'Total Bookings per Destination',
        data: destinationData,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Seasonal Trends Chart
  const ctx2 = document.getElementById('seasonalTrendsChart').getContext('2d');
  const seasonalTrendsChart = new Chart(ctx2, {
    type: 'line',
    data: {
      labels: monthLabels,
      datasets: [{
        label: 'Total Bookings per Month',
        data: monthCounts,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: true
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
};
