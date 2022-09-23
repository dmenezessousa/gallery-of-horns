import React from "react";
import { Modal, Button } from "react-bootstrap";
class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal bg="dark" show={this.props.showModal} onHide={this.props.setShowModalFalse}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img style={{width: "100%"}} src={this.props.selectedBeast.image_url} alt={this.props.selectedBeast.title} />
            <p>{this.props.selectedBeast.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.setShowModalFalse}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
