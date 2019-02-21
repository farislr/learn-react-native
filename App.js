import React from 'react'
import { Text, StyleProvider } from 'native-base'
import getTheme from './native-base-theme/components'
import platform from './native-base-theme/variables/platform'

import Route from './src/route'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isReady: false
    }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    })
    this.setState({ isReady: true })
  }

  render() {
    if (!this.state.isReady) {
      return <Text>Loading...</Text>
    }
    return (
      <StyleProvider style={getTheme(platform)}>
        <Route />
      </StyleProvider>
    )
  }
}
