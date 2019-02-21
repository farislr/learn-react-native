import React, { Component } from 'react'
import { Text, Container, Header, Content, Button } from 'native-base'
import { View } from 'react-native'

export default class Register extends Component {
  static navigationOptions = {
    headerTitle: 'Register'
  }

  render() {
    return (
      <Container>
        <Content>
          <Text>Register</Text>
        </Content>
      </Container>
    )
  }
}
