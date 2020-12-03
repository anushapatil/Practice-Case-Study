import defaultAxios from 'axios'

const axios = defaultAxios.create({
  baseURL: 'https://svc.metrotransit.org/'
})

export const fetchRoutes = async() => {
  try {
    const routes = await axios.get('NexTrip/Routes?format=json')
    return routes.data
  } catch(error) {
    return console.error(error)
  }
}

export const fetchDirections = async(routeId) => {
  try {
    const directions = await axios.get(`nextripv2/directions/${routeId}?format=JSON`)
    return directions.data
  } catch(error) {
    return console.error(error)
  }
}

export const fetchStops = async(routeId, directionId) => {
  try {
    const stops = await axios.get(`nextripv2/stops/${routeId}/${directionId}?format=JSON`)
    return stops.data
  } catch(error) {
    return console.error(error)
  }
}

export const fetchDepartures = async(routeId, directionId, stopId) => {
  try {
    const departures = await axios.get(`nextripv2/${routeId}/${directionId}/${stopId}?format=JSON`)
    return departures.data
  } catch(error) {
    return console.error(error)
  }
}
