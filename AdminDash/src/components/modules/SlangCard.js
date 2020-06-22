import React from "react";
import { Grid, Icon, Image, Segment, Card } from "semantic-ui-react";
import { Placeholder } from "./";

const SlangCard = () => {
  return (
    <Segment style={{ width: 200 }}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={7}>
            <Card raised image={"logo512.png"} />
          </Grid.Column>
          <Grid.Column width={9}>
            <Placeholder />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};
export default SlangCard;
