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
  GET_DEPARTURES
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

function* getRoutes() {
  const routes = yield call(fetchRoutes)
  yield put({ 
    type: GET_ROUTES,
    payload: routes
  })
}

function* getDirections({ routeId }) {
  yield put({ type: SET_ROUTE_ID, payload: routeId })
  const directions = yield call(fetchDirections, routeId)
  yield put({ 
    type: GET_DIRECTIONS,
    payload: directions
  })
}

function* getStops({ directionId }) {
  yield put({ type: SET_DIRECTION_ID, payload: directionId })
  const routeId = yield select(getRouteId)
  const stops = yield call(fetchStops, routeId, directionId)
  yield put({ 
    type: GET_STOPS,
    payload: stops
  })
}

function* getDepartures({ stopId }) {
  const routeId = yield select(getRouteId)
  const directionId = yield select(getDirectionId)

  yield put({ type: SET_STOP_ID, payload: stopId })
  const departures = yield call(fetchDepartures, routeId, directionId, stopId)
  yield put({ 
    type: GET_DEPARTURES,
    payload: departures
  })
}

export default function* rootSaga() {
  yield takeLatest(GET_ROUTES_REQUESTED, getRoutes)
  yield takeLatest(GET_DIRECTIONS_REQUESTED, getDirections)
  yield takeLatest(GET_STOPS_REQUESTED, getStops)
  yield takeLatest(GET_DEPARTURES_REQUESTED, getDepartures)
}
