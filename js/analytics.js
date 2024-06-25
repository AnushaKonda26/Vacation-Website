window.onload = function() {
  const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

  const allDestinations = ['Kerala', 'Shimla', 'Gokarna', 'Araku', 'Goa', 'Hampi', 'Kedarnath', 'Char Dham Yatra', 'Pondicherry', 'Ooty', 'Wayanad', 'Coorg'];

  // Popular Destinations Data
  const destinationCounts = allDestinations.reduce((acc, destination) => {
    acc[destination] = 0; 
    return acc;
  }, {});
  
  bookings.forEach(booking => {
    if (destinationCounts[booking.destination] !== undefined) {
      destinationCounts[booking.destination] += 1;
    }
  });

  const destinationLabels = Object.keys(destinationCounts);
  const destinationData = Object.values(destinationCounts);

  // Seasonal Trends Data
  const monthCounts = bookings.reduce((acc, booking) => {
    const month = new Date(booking.travelDate).getMonth();
    acc[month] = (acc[month] || 0) + 1;
    return acc;
  }, new Array(12).fill(0));
  const monthLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Popular Destinations Chart
  const ctx1 = document.getElementById('popularDestinationsChart').getContext('2d');
  const popularDestinationsChart = new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: destinationLabels,
      datasets: [{
        label: 'Number of Bookings per Destination',
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
        label: 'Number of Bookings per Month',
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
