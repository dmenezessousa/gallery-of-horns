import React from "react";
import { Card, Button } from "react-bootstrap";

class HornedBeast extends React.Component {
  //create a state constructor passing in props from data.json
  constructor(props) {
    super(props);
    this.state = {
      ratings: "",
    };
  }

  //create a function to increment the number of times an button is clicked
  handleClick = (e) => {
    this.setState({
      ratings: this.state.ratings + "❤️",
    });
  };

  render() {
    return (
      <>
        <Card bg="dark" style={{ width: "18rem", color: "white", height: "28rem" }}>
          <Card.Img
            style={{ height: "15rem" }}
            onClick={(e) => {
              this.props.setShowModalTrue(this.props.id);
            }}
            variant="top"
            src={this.props.image_url}
            alt={this.props.title}
            title={this.props.title}
          />
          <Card.Body >
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text >{this.props.description}</Card.Text>
            <Card.Text>{this.state.ratings}</Card.Text>
            <Button variant="primary" onClick={this.handleClick}>
              Favorite
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default HornedBeast;
