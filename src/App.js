import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux' 

import ContainerStyle from './styles'
import GlobalStyle from './theme/globalStyle'
import { Dropdown } from './components'
import {
  GET_ROUTES_REQUESTED,
  GET_DIRECTIONS_REQUESTED,
  GET_STOPS_REQUESTED,
  GET_DEPARTURES_REQUESTED
} from './redux/actions'

const styles = { textAlign: 'center', marginBottom: '1.5rem' }

const App = ({
  routeId,
  routes,
  directionId,
  directions,
  stops,
  departures,
  getRoutes,
  getDirections,
  getStops,
  getDepartures
}) => {
  useEffect(() => {
    getRoutes()
  }, [])
  return (
    <ContainerStyle>
      <GlobalStyle />
      <div className='content'>
        <h2 style={styles}>Real-time Departures</h2>
        <Dropdown 
          list={routes}
          value='Route'
          description='Description'
          callback={getDirections}
        />
        {routeId &&
          <Dropdown 
            list={directions}
            value='direction_id'
            description='direction_name'
            callback={getStops}
          />
        }
        {directionId &&
          <Dropdown 
            list={stops}
            value='place_code'
            description='description'
            callback={getDepartures}
          />
        }
      </div>
    </ContainerStyle>
  )
}

App.propTypes = {
  routes: PropTypes.array
}

const mapStateToProps = (state) => ({
  routeId: state.transit.routeId,
  routes: state.transit.routes,
  directionId: state.transit.directionId,
  directions: state.transit.directions,
  stops: state.transit.stops,
  departures: state.transit.departures,
})

const mapDispatchToProps = (dispatch) => ({
  getRoutes: () => dispatch({ type: GET_ROUTES_REQUESTED }),
  getDirections: (routeId) => dispatch({ type: GET_DIRECTIONS_REQUESTED, routeId }),
  getStops: (directionId) => dispatch({ type: GET_STOPS_REQUESTED, directionId }),
  getDepartures: (stopId) => dispatch({ type: GET_DEPARTURES_REQUESTED, stopId })
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
