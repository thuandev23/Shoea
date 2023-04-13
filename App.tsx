import { View, Text } from 'react-native'
import React from 'react'
import Loading_headerMain from './Loading/loadingscreen'
import LoadingScreen from './Loading/loadding'
import IndexComponent from './Login'
import { Provider } from 'react-redux'
import store from './Cart/store'

const App = () => {
  return (
    // <Loading_headerMain/>
    // <LoadingScreen/>
    <Provider store={store}>
      <IndexComponent/>
    </Provider>
  )
}

export default App