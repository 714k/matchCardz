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
  Body,
  StyleProvider
} from "native-base";

import styles from './styles';

export default class HeaderApp extends React.Component {
  render() {
    return (
      <Header
        style={{ backgroundColor: '#302D58'}}>
        <Left>
          <Button
            transparent>
            <Icon 
            style={styles.headerColor}
            name='menu' />
          </Button>
        </Left>
        <Body>
          <Title 
            style={styles.headerColor}>
            matchCardz
          </Title>
        </Body>
        <Right>
          <Button
            transparent>
            <Icon 
            style={styles.headerColor}
            name='share' />
          </Button>
          <Button
            transparent>
            <Icon 
            style={styles.headerColor}
            name='settings' />
          </Button>
        </Right>
      </Header>
    );
  }
}