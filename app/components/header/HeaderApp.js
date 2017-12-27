import React from "react";
import { StatusBar } from "react-native";
import { 
  Header,
  Title,
  Text,
  Left,
  Right,
  Button,
  Icon,
  Body
} from "native-base";

export default class HeaderApp extends React.Component {
  render() {
    return (
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate('DrawerOpen')}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>matchCardz</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}