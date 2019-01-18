import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import configStore from './store'
import Index from './pages/index'

import './app.scss'

const store = configStore()

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>  
    )
  }
}