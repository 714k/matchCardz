import React from "react";
import { 
  StatusBar
} from "react-native";
import { 
  Container,
  Content,
  Text
 } from "native-base";

 export default class SettingsScreen extends React.Component {
   render() {
     return (
      <Container>
        <Content>
          <Text>Settings</Text>
        </Content>
      </Container>
     );
   }
 }