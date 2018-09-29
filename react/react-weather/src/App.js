import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { view as WeatherLocation } from './weatherLocation'
import { Container, Grid } from 'semantic-ui-react'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <WeatherLocation />
      </div>
    </Provider>
  )
}

export default App