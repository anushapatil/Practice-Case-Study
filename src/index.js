import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import store from './redux/store'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route exact path='/' component={App} />
          <Route path='/list' component={App} />
        </div>
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
)
