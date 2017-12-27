import React from 'react';
import {
  AppRegistry
} from 'react-native';
import {
  Container,
  Content,
  Text,
  List,
  ListItem  
} from 'native-base';

const routes = [
  "Start",
  "Settings",
  "Share"
];

export default class SidebarApp extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}>
          </List>
        </Content>
      </Container>
    );
  }
}
