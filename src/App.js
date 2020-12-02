import React, { Component } from 'react'

import ContainerStyle from './styles'
import GlobalStyle from './theme/globalStyle'

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

  handleRoutesChange(event) {
    const routeId = event.target.value
    this.setState({ routeId })
    fetch(`https://svc.metrotransit.org/nextripv2/directions/${routeId}?format=JSON`)
      .then(response => response.json())
        .then(data => {
          console.log('directions', data)
          this.setState({ directions: data })
        })
  }

  handleDirectionsChange(event) {
    const directionId = event.target.value
    const { routeId } = this.state
    this.setState({ directionId })
    fetch(`https://svc.metrotransit.org/nextripv2/stops/${routeId}/${directionId}?format=JSON`)
      .then(response => response.json())
        .then(data => {
          console.log('stops', data)
          this.setState({ stops: data })
        })
  }

  handleStopsChange(event) {
    const stopId = event.target.value
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
      <ContainerStyle className='center-align grid-container'>
        <GlobalStyle />
        <div className='grid-item'>Real-time Departures</div>
        <div className='grid-item'>
          <select onChange={this.handleRoutesChange}>
            {routes && routes.map(({ Route, Description }) => 
              <option key={Route} value={Route}>
                {Description}
              </option>
            )}
          </select>
        </div>
        {routeId &&
          <div className='grid-item'>
            <select onChange={this.handleDirectionsChange}>
              {directions && directions.map(({ direction_id, direction_name }) => 
                <option key={direction_id} value={direction_id}>
                  {direction_name}
                </option>
              )}
            </select>
          </div>
        }
        {directionId &&
          <div className='grid-item'>
            <select onChange={this.handleStopsChange}>
              {stops && stops.map(({ description, place_code }) => 
                <option key={place_code} value={place_code}>
                  {description}
                </option>
              )}
            </select>
          </div>
        }
      </ContainerStyle>
    )
  }
}

export default App
