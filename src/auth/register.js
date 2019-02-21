import React, { Component } from 'react'
import {
  Text,
  Container,
  Content,
  Button,
  Form,
  Item,
  Label,
  Input,
  Footer,
  FooterTab,
  Body,
  ListItem
} from 'native-base'
import { View, CheckBox, StyleSheet } from 'react-native'

export default class Register extends Component {
  static navigationOptions = {
    headerTitle: 'Register'
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Full Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Password Confirmation</Label>
              <Input />
            </Item>
          </Form>
          <View style={style.checkboxLayout}>
            <CheckBox />
            <Text style={{ paddingTop: 5 }}>
              I agree with all term and conditions.
            </Text>
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Sign Up</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

const style = StyleSheet.create({
  checkboxLayout: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 24
  }
})
