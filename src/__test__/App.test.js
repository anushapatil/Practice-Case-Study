import React from 'react'
import { fireEvent, render, act } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import App from '../App'

const mockStore = configureStore([])
jest.mock('react-router', () => ({
	useHistory: () => ({
		push: jest.fn(),
	}),
}))

describe('App Connected React-Redux Component', () => {
	let store

	beforeEach(() => {
		store = mockStore({
			transit: {
				routeId: '901',
				routes: [
					{
						agency_id: 0,
						route_id: '901',
						route_label: 'Select route'
					},{
					agency_id: 1,
					route_id: '902',
					route_label: 'METRO Blue Line'
				}],
				showDirection: true,
				directionId: 1,
				directions: [{
					direction_id: 0,
					direction_name: 'Select direction'
				},{
					direction_id: 1,
					direction_name: 'Eastbound'
				}],
				showStop: true,
				stopId: 'UNDP',
				stops: [{
					description: 'Select stop',
					place_code: 'SELECT_STOP'
				},{
					description: 'Union Depot',
					place_code: 'UNDP'
				}],
				showDeparture: true,
				getRoutes: jest.fn(),
				getDirections: jest.fn(),
				getStops: jest.fn(),
				getDepartures: jest.fn(),
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
	})

  it('should render with given state from Redux store', () => {
		const appComponent = renderer.create(
			<Provider store={store}>
				<App />
			</Provider>
		)
		expect(appComponent.toJSON()).toMatchSnapshot()
  })
 
  it('should dispatch an action when selected route from dropdown', () => {
		// Setup
  	const { getByTestId } = render(
			<Provider store={store}>
				<App urlRouteId={'901'} urlDirectionId={1} urlStopId={'UNDP'} />
			</Provider>)

		// Execute
		fireEvent.change(getByTestId('stops_dropdown'), {
			target: { value: 'UNDP' },
		})

		// Assert
		expect(store.dispatch).toHaveBeenCalledTimes(2) // For getRoutes and getDepartures
	})
	
	it('should dispatch an action when browser url changed', () => {
		// Setup
		act(() => {
  		render(
				<Provider store={store}>
					<App urlRouteId={'902'} urlDirectionId={1} urlStopId={'UNDP'} />
				</Provider>
			)
		})
		// Assert
		expect(store.dispatch).toHaveBeenCalledTimes(2) // For getRoutes and getDepartures from useEffect
  })
})