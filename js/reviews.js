document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('ratingsChart').getContext('2d');
  const ratingsChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Kerala', 'Shimla', 'Gokarna', 'Araku', 'Goa', 'Hampi', 'Kedarnath', 'Char Dham Yatra', 'Pondicherry', 'Ooty', 'Wayanad', 'Coorg'],
      datasets: [{
        label: 'Average Rating',
        data: [4.8, 4.6, 4.5, 4.4, 4.7, 4.8, 4.7, 4.9, 4.6, 4.5, 4.6, 4.7],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        yAxisID: 'y'
      }, {
        label: 'Number of Reviews',
        data: [1200, 900, 600, 400, 2500, 700, 800, 1000, 500, 1100, 600, 900],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
        type: 'line',
        yAxisID: 'y1'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          min: 0,
          max: 5,
          ticks: {
            stepSize: 1
          },
          title: {
            display: true,
            text: 'Average Rating'
          }
        },
        y1: {
          beginAtZero: true,
          position: 'right',
          title: {
            display: true,
            text: 'Number of Reviews'
          }
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Ratings and Reviews Analytics'
        }
      }
    }
  });
});
