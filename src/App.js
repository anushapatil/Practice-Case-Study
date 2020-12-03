import React, { Component } from 'react'

import ContainerStyle from './styles'
import GlobalStyle from './theme/globalStyle'
import { Dropdown } from './components'

const styles = { textAlign: 'center', marginBottom: '1.5rem' }

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      routes: [],
      routeId: undefined,
      directions: [],
      directionId: undefined,
      stops: [],
      departures: []
    }
    this.fetchRoutesList = this.fetchRoutesList.bind(this)
    this.handleRoutesChange = this.handleRoutesChange.bind(this)
    this.handleDirectionsChange = this.handleDirectionsChange.bind(this)
    this.handleStopsChange = this.handleStopsChange.bind(this)
  }

  componentDidMount() {
    // fetch Routes
    this.fetchRoutesList()
  }

  fetchRoutesList() {
    fetch('https://svc.metrotransit.org/NexTrip/Routes?format=json')
      .then(response => response.json())
        .then(data => {
          console.log('routes', data)
          this.setState({ routes: data })
        })
  }

  handleRoutesChange(routeId) {
    this.setState({ routeId })
    fetch(`https://svc.metrotransit.org/nextripv2/directions/${routeId}?format=JSON`)
      .then(response => response.json())
        .then(data => {
          console.log('directions', data)
          this.setState({ directions: data })
        })
  }

  handleDirectionsChange(directionId) {
    const { routeId } = this.state
    this.setState({ directionId })
    fetch(`https://svc.metrotransit.org/nextripv2/stops/${routeId}/${directionId}?format=JSON`)
      .then(response => response.json())
        .then(data => {
          console.log('stops', data)
          this.setState({ stops: data })
        })
  }

  handleStopsChange(stopId) {
    const { routeId, directionId } = this.state
    fetch(`https://svc.metrotransit.org/nextripv2/${routeId}/${directionId}/${stopId}?format=JSON`)
      .then(response => response.json())
        .then(data => {
          console.log('departures', data)
          this.setState({ departures: data })
        })
  }

  render() {
    const { routes, routeId, directions, directionId, stops } = this.state
    return (
      <ContainerStyle>
        <GlobalStyle />
        <div className='content'>
          <h2 style={styles}>Real-time Departures</h2>
          <Dropdown 
            list={routes}
            value='Route'
            description='Description'
            callback={this.handleRoutesChange}
          />
          {routeId &&
            <Dropdown 
              list={directions}
              value='direction_id'
              description='direction_name'
              callback={this.handleDirectionsChange}
            />
          }
          {directionId &&
            <Dropdown 
              list={stops}
              value='place_code'
              description='description'
              callback={this.handleStopsChange}
            />
          }
        </div>
      </ContainerStyle>
    )
  }
}

export default App
