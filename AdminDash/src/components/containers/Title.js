import React, { Component } from "react";
import {
  Header,
  Grid,
  Button,
  Icon,
  Input,
  Statistic,
} from "semantic-ui-react";
import { AppContext } from "../../Reactor/Context/AppContext";

class Title extends Component {
  state = {};

  componentDidMount() {}

  handleRate = (e, { rating, maxRating }) =>
    this.setState({ rating, maxRating });

  render() {
    return (
      <>
        <Grid.Column width={13}>
          <Header
            as="h1"
            textAlign={"left"}
            style={{ color: "black", fontSize: "250%" }}
          >
            Reflex Admin Dashboard
          </Header>
        </Grid.Column>

        {/* <Grid.Column width={9}>
          <Header
            floated="left"
            as="h3"
            textAlign={"left"}
            style={{ color: "white" }}
          >
            <Header.Content>
              Portfolio Value $0
              <Header.Subheader style={{ color: "black" }}>
                Subtitle
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Grid.Column> */}

        <Grid.Column width={3}>
          <Button.Group id="NoDrag" floated="right">
            <Button icon>
              <Icon className="bell outline icon" />
            </Button>
            <Button content="Logout" />
            <Button
              icon
              color="red"
              onClick={() => {
                window.close();
              }}
            >
              <Icon className="power off icon" />
            </Button>
          </Button.Group>
        </Grid.Column>
      </>
    );
  }
}

export default Title;
