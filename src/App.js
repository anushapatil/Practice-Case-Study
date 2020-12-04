import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux' 

import ContainerStyle from './styles'
import GlobalStyle from './theme/globalStyle'
import { Dropdown, Table } from './components'
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
  showDirection,
  directionId,
  directions,
  showStop,
  stopId,
  stops,
  showDeparture,
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
        {/* <label for="route-select">Choose a route:</label>  accessibility*/} 
        <Dropdown 
          list={routes}
          value='Route'
          description='Description'
          callback={getDirections}
          defaultId={routeId}
        />
        { showDirection &&
          <Dropdown 
            list={directions}
            value='direction_id'
            description='direction_name'
            callback={getStops}
            defaultId={directionId}
          />
        }
        { showStop &&
          <Dropdown 
            list={stops}
            value='place_code'
            description='description'
            callback={getDepartures}
            defaultId={stopId}
          />
        }
        { showDeparture && <Table />}
      </div>
    </ContainerStyle>
  )
}

App.propTypes = {
  showDirection: PropTypes.bool,
  routes: PropTypes.array,
  showStop: PropTypes.bool,
  directions: PropTypes.array,
  stops: PropTypes.array,
  showDeparture: PropTypes.bool,
  getRoutes: PropTypes.func,
  getDirections: PropTypes.func,
  getStops: PropTypes.func,
  getDepartures: PropTypes.func
}

const mapStateToProps = (state) => ({
  routeId: state.transit.routeId,
  routes: state.transit.routes,
  showDirection: state.transit.showDirection,
  directionId: state.transit.directionId,
  directions: state.transit.directions,
  showStop: state.transit.showStop,
  stopId: state.transit.stopId,
  stops: state.transit.stops,
  showDeparture: state.transit.showDeparture
})

const mapDispatchToProps = (dispatch) => ({
  getRoutes: () => dispatch({ type: GET_ROUTES_REQUESTED }),
  getDirections: (routeId) => dispatch({ type: GET_DIRECTIONS_REQUESTED, routeId }),
  getStops: (directionId) => dispatch({ type: GET_STOPS_REQUESTED, directionId }),
  getDepartures: (stopId) => dispatch({ type: GET_DEPARTURES_REQUESTED, stopId })
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
