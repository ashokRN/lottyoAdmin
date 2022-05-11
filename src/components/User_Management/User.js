import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { List } from "react-virtualized";
import userList from "../data/user.json";
import "./User.css";

function User() {
  const Test_Height = 100;
  const Test_width = window.innerWidth;
  const [UserList] = useState(userList);

  function rowRenderer({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
  }) {
    return (
      <Row key={key} style={{ marginTop: "20px" }}>
        <Col lg={2}>
          <p
            style={{
              // fontSize: "15px",
              fontWeight: "500",
              color: "black",
              cursor: "pointer",
              display: "flex",
            }}
          >
            {UserList[index].userName}
          </p>
        </Col>
        <Col lg={2}>
          <p
            style={{
              // fontSize: "15px",
              fontWeight: "500",
              color: "black",
              cursor: "pointer",
              display: "flex",
            }}
          >
            {UserList[index].email}
          </p>
        </Col>
        <Col lg={2}>
          <p
            style={{
              // fontSize: "15px",
              fontWeight: "500",
              color: "black",
              cursor: "pointer",
              display: "flex",
            }}
          >
            {UserList[index].countryCode} {UserList[index].phoneNo}
          </p>
        </Col>
        <Col lg={2}>
          <p
            style={{
              // fontSize: "15px",
              fontWeight: "500",
              color: "black",
              cursor: "pointer",
              display: "flex",
            }}
          >
            {UserList[index].password}
          </p>
        </Col>
        <Col lg={2}>
          <p
            style={{
              // fontSize: "15px",
              fontWeight: "500",
              color: "black",
              cursor: "pointer",
              display: "flex",
            }}
          >
            {UserList[index].PAN.number}
          </p>
        </Col>
        <Col lg={2}>
          <p
            style={{
              // fontSize: "15px",
              fontWeight: "500",
              color: "black",
              cursor: "pointer",
              display: "flex",
            }}
          >
            {UserList[index].PAN.name}
          </p>
        </Col>
      </Row>
    );
  }
  return (
    <div>
      <Container fluid style={{ padding: "50px" }}>
        <Row>
          <Col
            style={{
              display: "flex",
              justifyContent: "start",
              padding: "10px",
            }}
          >
            <h3 style={{ color: "blue" }}> User Management</h3>
          </Col>
        </Row>
        <Row>
          <Col lg="3">
            <Form>
              <Form.Group
                className="mb-6"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>User Name</Form.Label>
                <Form.Control type="email" placeholder="Enter User Name" />
              </Form.Group>
            </Form>
          </Col>
          <Col lg="3">
            <Form>
              <Form.Group
                className="mb-6"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email address" />
              </Form.Group>
            </Form>
          </Col>
          <Col lg="3">
            <Form>
              <Form.Group
                className="mb-6"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Country Code</Form.Label>
                <Form.Control type="number" placeholder="Enter Country Code" />
              </Form.Group>
            </Form>
          </Col>
          <Col lg="3">
            <Form>
              <Form.Group
                className="mb-6"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="number" placeholder="Enter Mobile Number" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg="3">
            <Form>
              <Form.Group
                className="mb-6"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" />
              </Form.Group>
            </Form>
          </Col>
          <Col lg="3">
            <Form>
              <Form.Group
                className="mb-6"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Pan Card Number</Form.Label>
                <Form.Control type="password" placeholder="Enter Pan Number" />
              </Form.Group>
            </Form>
          </Col>
          {/* <Row style={{ display: 'flex',justifyContent:"flex-end"  }}> */}

          <Col lg="1" style={{ padding: "25px" }}>
            <Button
              className="btn btn-primary btn-block"
              //  onClick={SaveData}
              //  disabled={disable}
              style={{
                width: "70px",
                borderRadius: "5px",
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "12px",
                borderTopRightRadius: "0px",
                borderTopLeftRadius: "12px",
              }}
            >
              Save
            </Button>
          </Col>
          <Col lg="2" style={{ padding: "25px" }}>
            <Button
              className="btn btn-danger btn-block"
              //  onClick={cancelDrawer}
              style={{
                width: "90px",
                borderRadius: "5px",
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "12px",
                borderTopRightRadius: "0px",
                borderTopLeftRadius: "12px",
              }}
            >
              Cancel
            </Button>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col lg={2}>
            <h5
              style={{
                // fontSize: "15px",
                fontWeight: "500",
                color: "blue",
                cursor: "pointer",
                display: "flex",
              }}
            >
              User Name
            </h5>
          </Col>
          <Col lg={2}>
            <h5
              style={{
                // fontSize: "15px",
                fontWeight: "500",
                color: "blue",
                cursor: "pointer",
                display: "flex",
                //   justifyContent:"center"
              }}
            >
              Email
            </h5>
          </Col>
          <Col lg={2}>
            <h5
              style={{
                // fontSize: "15px",
                fontWeight: "500",
                color: "blue",
                cursor: "pointer",
                display: "flex",
                //   justifyContent:"center"
              }}
            >
              Mobile Number
            </h5>
          </Col>
          <Col lg={2}>
            <h5
              style={{
                // fontSize: "15px",
                fontWeight: "500",
                color: "blue",
                cursor: "pointer",
                display: "flex",
                //   justifyContent:"center"
              }}
            >
              Password
            </h5>
          </Col>
          <Col lg={2}>
            <h5
              style={{
                // fontSize: "15px",
                fontWeight: "500",
                color: "blue",
                cursor: "pointer",
                display: "flex",
                //   justifyContent:"center"
              }}
            >
              Pan Card
            </h5>
          </Col>

          <Col lg={2}>
            <h5
              style={{
                // fontSize: "15px",
                fontWeight: "500",
                color: "blue",
                cursor: "pointer",
                display: "flex",
                //   justifyContent:"center"
              }}
            >
              Pan Card Name
            </h5>
          </Col>
        </Row>
        <div
          className={"listDiv"}
          style={{
            padding: "0px",
            height: Test_Height * 3,
            overflow: "scroll",
            // width: Test_width,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Row style={{ padding: "20px" }}>
            <Col>
              <List
                className="example2"
                width={Test_width - 150}
                height={UserList.length * Test_Height}
                rowCount={UserList.length}
                rowHeight={Test_Height}
                rowRenderer={rowRenderer}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default User;
