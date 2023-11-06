import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const NavHeader = ({elect, search}) => {
  return (
    <div>
      {
        <Navbar expand="lg" className="navcolor fixed-top" style={{backgroundColor: "black"}}>
          <Container>
            <Navbar.Brand
              style={{ fontWeight: "bold", color: "black", color: "white" }}
              href="#home"
            >
              List of Countries Developed by
            </Navbar.Brand>
            <Navbar.Brand
              style={{ fontWeight: "bolder", color: "white" }}
              className="fs-1"
              href="#home"
            >
              DevFlame
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto ">
                <NavDropdown
                  title="Categories"
                  id="basic-nav-dropdown"
                  style={{ fontWeight: "bold", backgroundColor: "white"}}
                >
                  <NavDropdown.Item
                    href="#action/3.1"
                    style={{ color: "blue" }}
                    onClick={elect}
                  >
                    Africa
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#action/3.2"
                    style={{ color: "blue" }}
                    onClick={elect}
                  >
                    Europe
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#action/3.3"
                    style={{ color: "blue" }}
                    onClick={elect}
                  >
                    Americas
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href="#action/3.4"
                    style={{ color: "blue" }}
                    onClick={elect}
                  >
                    Oceania
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href="#action/3.4"
                    style={{ color: "blue" }}
                    onClick={elect}
                  >
                    Asia
                  </NavDropdown.Item>
                </NavDropdown>
                <Form inline className="ms-5 w-100">
                  <Row>
                    <Col xs="auto">
                      <Form.Control
                        type="text"
                        placeholder="Search by Category"
                        className=" mr-sm-2"
                        style={{ width: "35rem" }}
                        onChange={search}
                      />
                    </Col>
                  </Row>
                </Form>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      }
    </div>
  );
};
