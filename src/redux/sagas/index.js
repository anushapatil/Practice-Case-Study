import { put, takeEvery, takeLatest, call } from 'redux-saga/effects'

import types from '../actions'
import { fetchRoutes, fetchDirections, fetchStops, fetchDepartures } from '../api'

function* getRoutes() {
  console.log('getRoutes')

  yield put({ type: types.SET_LOADING })
  const routes = yield call(fetchRoutes)
  yield put({ 
    type: types.GET_ROUTES,
    payload: routes
  })
}

function* getDirections() {
  console.log('getDirections')

  const directions = yield call(fetchDirections)
  yield put({ 
    type: types.GET_DIRECTIONS,
    payload: directions
  })
}

function* getStops() {
  console.log('getStops')

  const stops = yield call(fetchStops)
  yield put({ 
    type: types.GET_STOPS,
    payload: stops
  })
}

function* getDepartures() {
  console.log('getDepartures')

  const departures = yield call(fetchDepartures)
  yield put({ 
    type: types.GET_DEPARTURES,
    payload: departures
  })
}

export default function* rootSaga() {
  yield takeLatest(types.GET_ROUTES, getRoutes)
  yield takeLatest(types.GET_DIRECTIONS, getDirections)
  yield takeLatest(types.GET_STOPS, getStops)
  yield takeLatest(types.GET_DEPARTURES, getDepartures)
}
