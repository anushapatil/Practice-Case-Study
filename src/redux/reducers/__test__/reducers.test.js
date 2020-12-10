
import reducers from '../reducers'
import { GET_DEPARTURES } from '../../actions'

describe('GET_DEPARTURES reducer', () => {
  it('should return the state to render departures table', () => {
    // Setup
    const initialState = {}
    // Execute
    const newState = reducers(initialState, {type: GET_DEPARTURES, payload: {
      departures: 'Airport',
      stops: [{description: 'abc', stop_id: 'xyz'}]
    }})

    // Assert
    expect(newState.departures).toBe('Airport')
    expect(newState.departsDescription).toBe('abc')
  })
})
