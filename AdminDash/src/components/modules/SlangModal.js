import React from "react";
import { Modal, Button } from "semantic-ui-react";

import { AppContext } from "../../Reactor/Context/AppContext";

const SlangModal = ({ header, content, actions }) => {
  return (
    <AppContext.Consumer>
      {(context) => {
        return (
          <Modal
            onClose={context.closeModal}
            open={context.state.SlangModal}
            size="large"
          >
            <Modal.Header>{header}</Modal.Header>
            <Modal.Content>{content}</Modal.Content>
            {actions}
          </Modal>
        );
      }}
    </AppContext.Consumer>
  );
};
export default SlangModal;
