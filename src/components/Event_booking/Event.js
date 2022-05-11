import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { List } from "react-virtualized";
import userList from "../data/user.json";
import "./Event.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function Event() {
  const Test_Height = 100;
  const Test_width = window.innerWidth;
  const [UserList] = useState(userList);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [resultDate, setResultDate] = useState(null);

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
            <h3 style={{ color: "blue" }}> Event Creation</h3>
          </Col>
        </Row>
        <Row>
          <Col lg="3">
            <Form>
              <Form.Group
                className="mb-6"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Event Name</Form.Label>
                <Form.Control type="email" placeholder="Enter Event Name" />
              </Form.Group>
            </Form>
          </Col>
          <Col lg="3">
            <Form>
              <Form.Group
                className="mb-6"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Total Count</Form.Label>
                <Form.Control type="number" placeholder="Enter Total Count" />
              </Form.Group>
            </Form>
          </Col>
          <Col lg="3">
            <Form>
              <Form.Group
                className="mb-6"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Ticket Price</Form.Label>
                <Form.Control type="number" placeholder="Enter Ticket Price" />
              </Form.Group>
            </Form>
          </Col>
          <Col lg="3">
            <Form>
              <Form.Group
                className="mb-6"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Winning Count</Form.Label>
                <Form.Control type="number" placeholder="Enter Winning Count" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg="2">
            <Form>
              <Form.Group
                className="mb-6"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Start Date</Form.Label>
                <DatePicker
                
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  minDate={new Date()}
                //   maxDate={addDays(new Date(), 31)}
                  placeholderText="Start Date"
                  withPortal="100%"
                />
              </Form.Group>
            </Form>
          </Col>
          <Col lg="2">
            <Form>
              <Form.Group
                className="mb-6"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>End Date</Form.Label>
                <DatePicker                
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  minDate={new Date()}
                //   maxDate={addDays(new Date(), 31)}
                  placeholderText="End Date"
                  withPortal="100%"
                />
              </Form.Group>
            </Form>
          </Col>
          <Col lg="2">
            <Form>
              <Form.Group
                className="mb-6"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Result date</Form.Label>
                <DatePicker                
                  selected={resultDate}
                  onChange={(date) => setResultDate(date)}
                  minDate={new Date()}
                //   maxDate={addDays(new Date(), 31)}
                  placeholderText="Result Date"
                  withPortal="100%"
                />
              </Form.Group>
            </Form>
          </Col>
          <Col lg="3">
            <Form>
              <Form.Group
                className="mb-6"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Minumum Buy Count</Form.Label>
                <Form.Control type="number" placeholder="Enter Minumum Name" />
              </Form.Group>
            </Form>
          </Col>
          <Col lg="3">
            <Form>
              <Form.Group
                className="mb-6"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Maximum Buy Count</Form.Label>
                <Form.Control type="number" placeholder="Enter Maximum Name" />
              </Form.Group>
            </Form>
          </Col>
          {/* <Row style={{ display: 'flex',justifyContent:"flex-end"  }}> */}

          
        </Row>
        <Row style={{display:"flex",justifyContent:"flex-end"}}>
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
        <Row style={{margin:"20px"}}>
          <Col lg={2}>
            <h6
              style={{
                // fontSize: "15px",
                fontWeight: "500",
                color: "blue",
                cursor: "pointer",
                display: "flex",
              }}
            >
              Event
            </h6>
          </Col>
          <Col lg={1}>
            <h6
              style={{
                // fontSize: "15px",
                fontWeight: "500",
                color: "blue",
                cursor: "pointer",
                display: "flex",
                //   justifyContent:"center"
              }}
            >
              Total
            </h6>
          </Col>
          <Col lg={1}>
            <h6
              style={{
                // fontSize: "15px",
                fontWeight: "500",
                color: "blue",
                cursor: "pointer",
                display: "flex",
                //   justifyContent:"center"
              }}
            >
              Ticket
            </h6>
          </Col>
          <Col lg={1}>
            <h6
              style={{
                // fontSize: "15px",
                fontWeight: "500",
                color: "blue",
                cursor: "pointer",
                display: "flex",
                //   justifyContent:"center"
              }}
            >
              Winning
            </h6>
          </Col>
          <Col lg={1}>
            <h6
              style={{
                // fontSize: "15px",
                fontWeight: "500",
                color: "blue",
                cursor: "pointer",
                display: "flex",
                //   justifyContent:"center"
              }}
            >
              Start Date
            </h6>
          </Col>

          <Col lg={2}>
            <h6
              style={{
                // fontSize: "15px",
                fontWeight: "500",
                color: "blue",
                cursor: "pointer",
                display: "flex",
                //   justifyContent:"center"
              }}
            >
              End Date
            </h6>
          </Col>

          <Col lg={1}>
            <h6
              style={{
                // fontSize: "15px",
                fontWeight: "500",
                color: "blue",
                cursor: "pointer",
                display: "flex",
                //   justifyContent:"center"
              }}
            >
              Result
            </h6>
          </Col>
          <Col lg={1}>
            <h6
              style={{
                // fontSize: "15px",
                fontWeight: "500",
                color: "blue",
                cursor: "pointer",
                display: "flex",
                //   justifyContent:"center"
              }}
            >
              Minumum 
            </h6>
          </Col>
          <Col lg={2}>
            <h6
              style={{
                // fontSize: "15px",
                fontWeight: "500",
                color: "blue",
                cursor: "pointer",
                display: "flex",
                //   justifyContent:"center"
              }}
            >
              Maximum
            </h6>
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

export default Event;
