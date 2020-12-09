import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux' 
import { useHistory } from 'react-router'

import { Dropdown, Table } from './components'
import {
  GET_ROUTES_REQUESTED,
  GET_DIRECTIONS_REQUESTED,
  GET_STOPS_REQUESTED,
  GET_DEPARTURES_REQUESTED
} from './redux/actions'
import GlobalStyle from './theme/globalStyle'

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
  getDepartures,
  urlRouteId,
  urlDirectionId,
  urlStopId,
}) => {
  const history = useHistory()
  useEffect(() => {
    getRoutes()
  }, [])
  useEffect(() => {
    if ((urlRouteId && urlDirectionId && urlStopId ) && (urlRouteId != routeId || urlDirectionId != directionId || urlStopId != stopId)) {
      // get departure table
      getDepartures(urlRouteId, urlDirectionId, urlStopId)
    }
  }, [urlRouteId, urlDirectionId, urlStopId])

  const handleGetDepartures = (stopId) => {
    // push id to the url path
    history.push(`/${routeId}/${directionId}/${stopId}`)
    // dispatch action to get directions
    getDepartures(routeId, directionId, stopId)
  }
  return (
    <div className='container'>
      <GlobalStyle />
      <h2 className='text-center'>Real-time Departures</h2>
      <Dropdown 
        list={routes}
        value='route_id'
        description='route_label'
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
          callback={handleGetDepartures}
          defaultId={stopId}
        />
      }
      { showDeparture &&
        <Table />
      }
    </div>
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
  getDepartures: (routeId, directionId, stopId) => dispatch({ type: GET_DEPARTURES_REQUESTED, routeId, directionId, stopId })
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
