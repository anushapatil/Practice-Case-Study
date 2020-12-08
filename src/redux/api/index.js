import defaultAxios from 'axios'

import {
  BASE_URL,
  ROUTES_ENDPOINT,
  DIRECTION_ENDPOINT,
  STOPS_ENDPOINT,
  DEPARTURE_ENDPOINT
} from './constant'

const axios = defaultAxios.create({
  baseURL: BASE_URL
})

export const fetchRoutes = async() => {
  try {
    const routes = await axios.get(ROUTES_ENDPOINT)
    return routes.data
  } catch(error) {
    return console.error(error)
  }
}

export const fetchDirections = async(routeId) => {
  try {
    const directions = await axios.get(DIRECTION_ENDPOINT + routeId)
    return directions.data
  } catch(error) {
    return console.error(error)
  }
}

export const fetchStops = async(routeId, directionId) => {
  try {
    const stops = await axios.get(`${STOPS_ENDPOINT}${routeId}/${directionId}`)
    return stops.data
  } catch(error) {
    return console.error(error)
  }
}

export const fetchDepartures = async(routeId, directionId, stopId) => {
  try {
    const departures = await axios.get(`${DEPARTURE_ENDPOINT}${routeId}/${directionId}/${stopId}`)
    return departures.data
  } catch(error) {
    return console.error(error)
  }
}
