import {
  GET_ROUTES,
  GET_DIRECTIONS,
  GET_STOPS,
  GET_DEPARTURES,
  SET_ROUTE_ID,
  SET_DIRECTION_ID,
  SET_STOP_ID
} from '../actions'

// Initial state
const initialState = {
  routeId: undefined,
  routes: [],
  directionId: undefined,
  directions: [],
  stopId: undefined,
  stops: [],
  departures: [],
}

export default(state = initialState, { type, payload }) => {
  switch(type) {
    case GET_ROUTES:
      return {
        ...state,
        routes: payload
      }
    case SET_ROUTE_ID:
      return {
        ...state,
        routeId: payload
      }
    case GET_DIRECTIONS:
      return {
        ...state,
        directions: payload
      }
    case SET_DIRECTION_ID:
      return {
        ...state,
        directionId: payload
      }
    case GET_STOPS:
      return {
        ...state,
        stops: payload
      }
    case SET_STOP_ID:
      return {
        ...state,
        stopId: payload
      }
    case GET_DEPARTURES:
      return {
        ...state,
        departures: payload
      }
    default:
      return state
  }
}
