import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom'

import store from './redux/store'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Route path='/:routeId?/:directionId?/:stopId?' render={({match}) => (<App urlRouteId={match.params.routeId} urlDirectionId={match.params.directionId} urlStopId={match.params.stopId}/>)} />  
      </HashRouter>
    </Provider>,
  document.getElementById('root')
)
