import React, { PropTypes } from "react";
import { 
  Container,
  Header,
  Title,
  Button,
  View,
} from "native-base";

const Main = (props) => {
  const routeStack = props.navigator.getCurrentRoutes();
  return (
    <Container>
      <View>
        <Header>
          <Title>Start</Title>
        </Header>
        <View>
          <Button
            onPress={() => this.props.navigator.jumpTo(routeStack[1])}>
          SignIn
          </Button>
          <Button
            onPress={() => this.props.navigator.jumpTo(routeStack[2])}>
          Register
          </Button>
        </View>
      </View>
    </Container>
  );
};

Main.propTypes = {
  navigator: PropTypes.shape({
    getCurrentRoutes: PropTypes.func,
    jumpTo: PropTypes.func,
  }),
};

export default Main;