import defaultAxios from 'axios'

import {
  BASE_URL,
  ROUTES_ENDPOINT,
  FORMAT_JSON,
  DIRECTION_ENDPOINT,
  STOPS_ENDPOINT,
  DEPARTURE_ENDPOINT
} from './constant'

const axios = defaultAxios.create({
  baseURL: BASE_URL
})

export const fetchRoutes = async() => {
  try {
    const routes = await axios.get(ROUTES_ENDPOINT + FORMAT_JSON)
    return routes.data
  } catch(error) {
    return console.error(error)
  }
}

export const fetchDirections = async(routeId) => {
  try {
    const directions = await axios.get(DIRECTION_ENDPOINT + routeId + FORMAT_JSON)
    return directions.data
  } catch(error) {
    return console.error(error)
  }
}

export const fetchStops = async(routeId, directionId) => {
  try {
    const stops = await axios.get(`${STOPS_ENDPOINT}${routeId}/${directionId}${FORMAT_JSON}`)
    return stops.data
  } catch(error) {
    return console.error(error)
  }
}

export const fetchDepartures = async(routeId, directionId, stopId) => {
  try {
    const departures = await axios.get(`${DEPARTURE_ENDPOINT}${routeId}/${directionId}/${stopId}${FORMAT_JSON}`)
    return departures.data
  } catch(error) {
    return console.error(error)
  }
}
