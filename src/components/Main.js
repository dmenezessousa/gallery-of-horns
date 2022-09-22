import React from "react";
import HornedBeast from "./HornedBeast";
import SelectedBeast from "./SelectedBeast";
import data from "../data.json";
import { Container, Row, Col } from "react-bootstrap";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
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

  render() {
    return (
      <>
        <Container>
          <Row>
            {data.map((animalData) => {
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
