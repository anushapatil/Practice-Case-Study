import React from 'react'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import Table from '../'

const mockStore = configureStore([])

// UI testing
test('Snapshot Table', () => {
  const store = mockStore({
    transit: {
      departures: [{
        actual: true,
        departure_text: '6 Min',
        departure_time: 1607571120,
        description: 'to Mpls-Target Field',
        direction_id: 1,
        direction_text: 'WB',
        route_id: '902',
        route_short_name: 'Green',
        schedule_relationship: 'Scheduled',
        stop_id: 56026,
        trip_id: '17807892-DEC20-RAIL-Weekday-01'
      }], 
      departsDescription: 'MOA station',
      departsStopId: 1
    }
  })

  store.dispatch = jest.fn()

  const appComponent = renderer.create(
    <Provider store={store}>
      <Table />
    </Provider>
  )
  expect(appComponent.toJSON()).toMatchSnapshot()
})