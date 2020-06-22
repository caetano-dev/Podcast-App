import React, { Component } from "react";
import { Button, Segment, Grid, Icon, Rating } from "semantic-ui-react";

class LeftBar extends Component {
  state = {};

  handleRate = (e, { rating, maxRating }) =>
    this.setState({ rating, maxRating });
  render() {
    const { sidebarVisible, setSidebarVisible } = this.props;

    return (
      <Grid.Column width={3}>
        <Segment
          vertical
          id="NoDrag"
          inverted
          style={{
            height: "125vh",
            alignItems: "flex-start",
            justifyItems: "center",
            backgroundColor: "inherit",
          }}
        >
          <Segment
            vertical
            id="NoDrag"
            inverted
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              // marginTop: -15,
              border: "solid 4px black",
              backgroundColor: "#2A6EE5",
            }}
          >
            <Button.Group vertical>
              <Button
                style={{ fontSize: "2.5vw" }}
                icon="user circle"
                color="black"
                onClick={() => {
                  setSidebarVisible(!sidebarVisible);
                }}
              />
              <Button id="NoDrag" color="black" style={{ fontSize: "2vw" }}>
                Upload
              </Button>
            </Button.Group>
          </Segment>
        </Segment>
      </Grid.Column>
    );
  }
}

export default LeftBar;
