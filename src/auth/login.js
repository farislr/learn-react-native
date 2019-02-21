import React from 'react'
import {
  Header,
  Container,
  Button,
  Text,
  Content,
  Label,
  Form,
  Item,
  Input
} from 'native-base'
import { View } from 'react-native'
import { StyleSheet } from 'react-native'

export default class Login extends React.Component {
  static navigationOptions = {
    headerTitle: 'Login'
  }
  render() {
    return (
      <Container>
        <Content padder contentContainerStyle={styles.content}>
          <Form style={{ width: '100%' }}>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <View style={styles.button}>
            <Button block>
              <Text>Sign In</Text>
            </Button>
            <Text style={{ marginVertical: 12, alignSelf: 'center' }}>Or</Text>
            <Button
              block
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text>Sign Up</Text>
            </Button>
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    margin: 24,
    flex: 1,
    width: '100%'
  }
})
