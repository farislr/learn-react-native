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
import { View, StyleSheet } from 'react-native'
import CheckBox from 'react-native-check-box'

export default class Register extends Component {
  constructor() {
    super()
    this.state = {
      isChecked: false
    }
  }

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
          <ListItem style={{ borderBottomWidth: 0 }}>
            <CheckBox
              onClick={() =>
                this.setState({
                  isChecked: !this.state.isChecked
                })
              }
              isChecked={this.state.isChecked}
            />
            <Body>
              <Text>I agree with all term and condition s.</Text>
            </Body>
          </ListItem>
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
    marginVertical: 24,
    width: '100%'
  }
})
