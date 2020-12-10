import { put, takeLatest, call, select } from 'redux-saga/effects'

import {
  GET_ROUTES_REQUESTED,
  GET_ROUTES,
  SET_ROUTE_ID,
  GET_DIRECTIONS_REQUESTED,
  GET_DIRECTIONS,
  SET_DIRECTION_ID,
  GET_STOPS_REQUESTED,
  GET_STOPS,
  SET_STOP_ID,
  GET_DEPARTURES_REQUESTED,
  GET_DEPARTURES,
  SHOW_DIRECTION_DROP_DOWN,
  SHOW_STOPS_DROPDOWN,
  SHOW_DEPARTURES_TABLE,
  RESET_ROUTE_DATA,
  RESET_DIRECTION_DATA,
  RESET_STOP_DATA
} from '../actions'
import {
  fetchRoutes,
  fetchDirections,
  fetchStops,
  fetchDepartures
} from '../api'
import {
  getRouteId,
  getDirectionId
} from '../selectors'
import {
  DEFAULT_ROUTE,
  DEFAULT_DIRECTION,
  DEFAULT_STOP
} from '../constant'

function* getRoutes() {
  const routes = yield call(fetchRoutes)
  yield put({ 
    type: GET_ROUTES,
    payload: routes
  })
}

export function* getDirections({ routeId }) {
  if (routeId === DEFAULT_ROUTE) {
    yield put({ type: RESET_ROUTE_DATA })
    return
  }
  yield put({ type: SET_ROUTE_ID, payload: routeId })
  const directions = yield call(fetchDirections, routeId)
  yield put({ 
    type: GET_DIRECTIONS,
    payload: directions
  })
  yield put({ type: SHOW_DIRECTION_DROP_DOWN })
}

export function* getStops({ directionId }) {
  if (directionId === DEFAULT_DIRECTION) {
    yield put({ type: RESET_DIRECTION_DATA })
    return
  }
  yield put({ type: SET_DIRECTION_ID, payload: directionId })
  const routeId = yield select(getRouteId)
  const stops = yield call(fetchStops, routeId, directionId)
  yield put({ 
    type: GET_STOPS,
    payload: stops
  })
  yield put({ type: SHOW_STOPS_DROPDOWN })
}

export function* getDepartures({ routeId, directionId, stopId }) {
  if (stopId === DEFAULT_STOP) {
    yield put({ type: RESET_STOP_DATA })
    return
  }
  const route_id = routeId ? routeId : yield select(getRouteId)
  const direction_id = directionId ? directionId : yield select(getDirectionId)

  yield put({ type: SET_STOP_ID, payload: stopId })
  const departures = yield call(fetchDepartures, route_id, direction_id, stopId)
  yield put({ 
    type: GET_DEPARTURES,
    payload: departures
  })
  yield put({ type: SHOW_DEPARTURES_TABLE })
}

export default function* rootSaga() {
  yield takeLatest(GET_ROUTES_REQUESTED, getRoutes)
  yield takeLatest(GET_DIRECTIONS_REQUESTED, getDirections)
  yield takeLatest(GET_STOPS_REQUESTED, getStops)
  yield takeLatest(GET_DEPARTURES_REQUESTED, getDepartures)
}
