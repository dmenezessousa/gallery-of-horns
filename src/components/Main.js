import React from "react";
import HornedBeast from "./HornedBeast";
import SelectedBeast from "./SelectedBeast";
import data from "../data.json";
import { Container, Row, Col, Form } from "react-bootstrap";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
      displayBeasts: data,
    };
  }

  setShowModalTrue = (key) => {
    const filteresBeast = data.filter((animal) => {
      return animal._id === key;
    });

    this.setState({
      showModal: true,
      selectedBeast: filteresBeast[0],
    });
  };

  setShowModalFalse = () => {
    this.setState({
      showModal: false,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const horns = e.target.value;
    const filteresBeast = data.filter((animal) => {
      return animal.horns === parseInt(horns);
    });
    this.setState({
      displayBeasts: filteresBeast,
    });
    console.log(filteresBeast);

    if (horns === "All") {
      this.setState({
        displayBeasts: data,
      });
    }
  };

  render() {
    return (
      <>
        <Container>
          <Form >
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Search Animal By Horns</Form.Label>
              <Form.Control as="select" custom onChange={this.handleFormSubmit}>
                <option>All</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>100</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Container>
        <Container>
          <Row>
            {this.state.displayBeasts.map((animalData) => {
              return (
                <Col>
                  <HornedBeast
                    id={animalData._id}
                    key={animalData._id}
                    image_url={animalData.image_url}
                    title={animalData.title}
                    description={animalData.description}
                    keyword={animalData.keyword}
                    horns={animalData.horns}
                    setShowModalTrue={this.setShowModalTrue}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
        <SelectedBeast
          showModal={this.state.showModal}
          setShowModalFalse={this.setShowModalFalse}
          selectedBeast={this.state.selectedBeast}
        />
      </>
    );
  }
}

export default Main;
