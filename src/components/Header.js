import React from "react";
import { Navbar } from "react-bootstrap";
class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <h1 style={{color: "white", }}>Gallery of Horns</h1>
        </Navbar>
      </>
    );
  }
}

export default Header;
