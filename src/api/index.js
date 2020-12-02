export const fetchRoutes = () => {
  fetch('https://svc.metrotransit.org/NexTrip/Routes?format=json')
      .then(response => response.json())
        .then(data => { return data })
} 