import { expectSaga } from 'redux-saga-test-plan'

import { getDirections } from '..'
import {
  DEFAULT_ROUTE
} from '../../constant'

import { RESET_ROUTE_DATA, SET_ROUTE_ID, GET_DIRECTIONS, SHOW_DIRECTION_DROP_DOWN } from '../../actions'

const directionsMockData = [{
  direction_id: 0,
  direction_name: 'Select direction'
},{
  direction_id: 1,
  direction_name: 'Eastbound'
}]

jest.mock('../../api', () => ({
	fetchDirections: () => (directionsMockData),
}))

describe('getDirections saga', () => {
  it('should reset route data if default route selected ', ()=> {
    return expectSaga(getDirections, { routeId: DEFAULT_ROUTE }).put({type: RESET_ROUTE_DATA}).run()
  })

  it('should set route, get directions and show direction drop down ', ()=> {
    return expectSaga(getDirections, { routeId: '901' })
    .put({type: SET_ROUTE_ID, payload: '901' })
    .put({type: GET_DIRECTIONS, payload: directionsMockData})
    .put({type: SHOW_DIRECTION_DROP_DOWN})
    .run()
  })
})