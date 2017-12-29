import React from "react";
import { 
  StatusBar
} from "react-native";
import { 
  Container,
  Content,
  Form,
  Item,
  Input,
  Icon,
  Button,
  Text
 } from "native-base";

 import HeaderApp from "../components/header/HeaderApp";

 export default class RegisterScreen extends React.Component {
   render() {
    return <Container>
        <HeaderApp />
        <Content padder>
          <Form>
            <Item floatingLabel>
              <Icon name="person" />
              <Input placeholder="Username" />
            </Item>
            <Item floatingLabel>
              <Icon name="mail" />
              <Input placeholder="Email" />
            </Item>
            <Item floatingLabel last>
              <Icon name="key" />
              <Input placeholder="Password" />
            </Item>
            <Button full>
              <Text>Register</Text>
            </Button>
          </Form>
        </Content>
      </Container>;
   }
 }