import React, { useState, useEffect } from "react";
import { Grid, Segment, Sidebar, Modal, Menu, Button } from "semantic-ui-react";
import "./../App.css";
import { Title, LeftBar, Body } from "../components/containers";
import { Scrollbars } from "react-custom-scrollbars";

import { SlangModal } from "../components/modules";
import { AppContext } from "./Context/AppContext";

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [select, setSelect] = useState("A");

  const handleModel = (select) => {
    switch (select) {
      default:
        return (
          <SlangModal
            header="default"
            content={<p>aaaaaaaaaaaaa</p>}
            actions={
              <Modal.Actions>
                <Button negative>No</Button>
                <Button
                  positive
                  icon="checkmark"
                  labelPosition="right"
                  content="Yes"
                />
              </Modal.Actions>
            }
          />
        );
      case "A":
        return (
          <SlangModal
            header="case A"
            content={<p>case A</p>}
            actions={
              <Modal.Actions>
                <Button negative>No</Button>
                <Button
                  positive
                  icon="checkmark"
                  labelPosition="right"
                  content="Yes"
                />
              </Modal.Actions>
            }
          />
        );
      case "B":
        return (
          <SlangModal
            header="case B"
            content={<p>case B</p>}
            actions={
              <Modal.Actions>
                <Button negative>No</Button>
                <Button
                  positive
                  icon="checkmark"
                  labelPosition="right"
                  content="Yes"
                />
              </Modal.Actions>
            }
          />
        );
      case "C":
        return null;
    }
  };

  return (
    <AppContext.Consumer>
      {(context) => {
        return (
          <Scrollbars id="NoDrag" style={{ width: "100vw", height: "100vh" }}>
            <Segment inverted tertiary style={{ padding: 0 }}>
              <Sidebar.Pushable as="div">
                <Sidebar
                  as={Menu}
                  animation="slide along"
                  icon="labeled"
                  inverted
                  onHide={() => setSidebarVisible(!sidebarVisible)}
                  vertical
                  visible={sidebarVisible}
                  width="thin"
                >
                  <Menu.Item as="a">Home</Menu.Item>
                  <Menu.Item
                    as="a"
                    onClick={() => {
                      context.openModal();
                      setSelect("A");
                    }}
                  >
                    Games
                  </Menu.Item>
                  <Menu.Item
                    as="a"
                    onClick={() => {
                      context.openModal();
                      setSelect("B");
                    }}
                  >
                    Channels
                  </Menu.Item>
                </Sidebar>

                {handleModel(select)}

                <Sidebar.Pusher dimmed={sidebarVisible}>
                  <Segment basic style={{ padding: 0 }}>
                    <Grid>
                      <Grid.Row
                        className="AppHeader"
                        style={{
                          marginTop: 10,
                          marginRight: 12,
                          marginLeft: 12,
                        }}
                      >
                        <Title
                          sidebarVisible={sidebarVisible}
                          setSidebarVisible={setSidebarVisible}
                        />

                        <LeftBar setSidebarVisible={setSidebarVisible} />

                        <Body />
                      </Grid.Row>
                    </Grid>
                  </Segment>
                </Sidebar.Pusher>
              </Sidebar.Pushable>
            </Segment>
          </Scrollbars>
        );
      }}
    </AppContext.Consumer>
  );
};

export default App;
