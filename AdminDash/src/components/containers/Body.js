import React, { Component } from "react";
import {
  Grid,
  Rating,
  Segment,
  Header,
  Icon,
  Popup,
  Button,
  Label,
  Input,
} from "semantic-ui-react";

import { SlangChart } from "../../components/modules";

class Body extends Component {
  state = {};

  render() {
    return (
      <Grid.Column width={13}>
        <Segment basic id="NoDrag">
          <Segment>
            <div>
              <h2>Upload episode</h2>
              <Input label="Title" placeholder="Episode Title" />
            </div>
            {/* <SlangChart height={300} width={550} /> */}
          </Segment>
        </Segment>
      </Grid.Column>
    );
  }
}

export default Body;
