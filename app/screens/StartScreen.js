import React from "react";
import { 
  StatusBar,
  StyleSheet,
  Platform
} from "react-native";
import { 
  Container,
  Content,
  Text
 } from "native-base";

import HeaderApp from "../components/header/HeaderApp";
import SidebarApp from "../components/sidebar/Sidebar";

export default class StartScreen extends React.Component {
   render() {
    const { props } = this.props;
    return (
    <Container>
      <HeaderApp />
      <Content padder>
        <Text>Start</Text>
        <SidebarApp {...props} />
      </Content>
    </Container>
    );
   }
 }