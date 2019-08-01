import React, { Component } from 'react'
import {
  Card,
  Button,
  Content,
  Container,
  Footer,
  FooterTab,
  Text,
  Icon,
  Item,
} from 'native-base'

export default class BottomBar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    // this.setActive = this.setActive.bind(this)
  }

  render() {
    ButtonList = props => {
      const { routes } = props.navigation.state
      const { state } = props.navigation
      const buttons = routes.map((route, index) => {
        const { icon } = route.params
        return (
          <Button
            key={route.key}
            full
            onPress={() => {
              props.navigation.navigate(route.routeName)
            }}
            active={state.index === index}
          >
            <Icon type={icon.type} name={icon.name} />
            <Text>{route.routeName}</Text>
          </Button>
        )
      })

      return buttons
    }
    return (
      <Footer>
        <FooterTab>
          <ButtonList {...this.props} />
        </FooterTab>
      </Footer>
    )
  }
}
