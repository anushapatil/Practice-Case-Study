import {
  GET_ROUTES,
  GET_DIRECTIONS,
  GET_STOPS,
  GET_DEPARTURES,
  SET_ROUTE_ID,
  SET_DIRECTION_ID,
  SET_STOP_ID,
  SHOW_DIRECTION_DROP_DOWN,
  SHOW_STOPS_DROPDOWN,
  SHOW_DEPARTURES_TABLE,
  RESET_ROUTE_DATA,
  RESET_DIRECTION_DATA,
  RESET_STOP_DATA,
  GET_DIRECTIONS_REQUESTED,
  GET_STOPS_REQUESTED,
  GET_DEPARTURES_REQUESTED
} from '../actions'

import {
  SELECT_ROUTE,
  SELECT_DIRECTION,
  SELECT_STOP,
} from './constant'

import {
  DEFAULT_ROUTE,
  DEFAULT_DIRECTION,
  DEFAULT_STOP
} from '../constant'

// Initial state
const stopIntialState = {
  departures: [],
  showDeparture: false
}

const directionInitialState = {
  ...stopIntialState,
  showStop: false,
  stopId: undefined,
  stops: [],
}

const routeInitialState = {
  ...directionInitialState,
  showDirection: false,
  directionId: undefined,
  directions: [],
}

const initialState = {
  ...routeInitialState,
  routeId: undefined,
  routes: [],
}

const defaultRoute = {
  Description: SELECT_ROUTE,
  Route: DEFAULT_ROUTE
}

const defaultDirection = {
  direction_name: SELECT_DIRECTION,
  direction_id: DEFAULT_DIRECTION
}

const defaultStop = {
  description: SELECT_STOP,
  place_code: DEFAULT_STOP
}

export default(state = initialState, { type, payload }) => {
  switch(type) {
    case GET_ROUTES:
      return {
        ...state,
        routes: [
          defaultRoute,
          ...payload
        ]
      }
    case GET_DIRECTIONS_REQUESTED: // directions data
      return {
        ...state,
        directionId: DEFAULT_DIRECTION,
        ...directionInitialState
      }
    case SET_ROUTE_ID:
      return {
        ...state,
        routeId: payload
      }
    case GET_DIRECTIONS:
      return {
        ...state,
        directions: [
          defaultDirection,
          ...payload,
        ]
      }
    case SHOW_DIRECTION_DROP_DOWN:
      return {
        ...state,
        showDirection: true
      }
    case GET_STOPS_REQUESTED: // stops data
      return {
        ...state,
        stopId: DEFAULT_STOP
      }    
    case SET_DIRECTION_ID:
      return {
        ...state,
        directionId: payload
      }
    case GET_STOPS:
      return {
        ...state,
        stops: [
          defaultStop,
          ...payload
        ]
      }
    case SHOW_STOPS_DROPDOWN:
      return {
        ...state,
        showStop: true
      }
    case GET_DEPARTURES_REQUESTED: // departure data
      return {
        ...state
      }
    case SET_STOP_ID:
      return {
        ...state,
        stopId: payload
      }
    case GET_DEPARTURES:
      return {
        ...state,
        departures: payload.departures,
        departsDescription: payload.stops[0].description,
        departsStopId: payload.stops[0].stop_id
      }
    case SHOW_DEPARTURES_TABLE:
      return {
        ...state,
        showDeparture: true
      }
    case RESET_ROUTE_DATA: // all reset data start
      return {
        ...state,
        ...routeInitialState
      }
    case RESET_DIRECTION_DATA:
      return {
        ...state,
        ...directionInitialState
      }
    case RESET_STOP_DATA:
      return {
        ...state,
        ...stopIntialState
      }
    default:
      return state
  }
}
