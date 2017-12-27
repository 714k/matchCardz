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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

const instructions = Platform.select({
  ios: "iOS content",
  android: "Android content"
});
 
 export default class HomeScreen extends React.Component {
   render() {
     return (
      <Container>
        <HeaderApp />
        <Content padder>
          <Text>Home</Text>
          <SidebarApp {...props} />
        </Content>
      </Container>
     );
   }
 }