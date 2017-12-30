import React from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  Platform
} from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Form,
  Item,
  Button,
  Text
} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class MainScreen extends React.Component {
  render() {
    const { props } = this.props;
    return (
      <Content padder>
        <View
          style={{ padding: 30 }}>
          <Text
            style={styles.logoA}>match</Text>
          <Text
            style={styles.logoB}>Cardz</Text>
        </View>
        <Form>
          <Button
            style={styles.btn}
            full
            primary>
            <Text>Login</Text>
          </Button>
          <Button
            transparent>
            <Text>Forget password?</Text>
          </Button>
          <Button
            style={styles.btn}
            block
            backgroundColor="#3b5998">
            <Icon
              name='facebook'
              size={20}
              color='white'
            />
            <Text>Login with Facebook</Text>
          </Button>
          <Button
            style={styles.btn}
            block
            backgroundColor="#dd4b39">
            <Icon
              name='google'
              size={20}
              color='white'
            />
            <Text>Login with Google</Text>
          </Button>
          <Button
            style={styles.btn}
            full
            primary>
            <Text>Enter as a Guest</Text>
          </Button>
        </Form>
      </Content>
    );
  }
}