import React, { Component } from "react-native";
import { Container, Content, Card, CardItem, Text } from "native-base";

export default class LatestEpisode extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem header>
              <Text>Latest Episode</Text>
            </CardItem>
            <CardItem>
              <Text>woop,scoop,shmaloop</Text>
            </CardItem>
            <CardItem header>
              <Text>Footer</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
