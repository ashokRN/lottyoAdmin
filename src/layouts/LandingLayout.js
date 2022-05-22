import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './layout.css';

const LandingLayout = ({ children }) => {
     return (
          <React.Fragment>
               <Container fluid>
                    <Row>
                         <Col lg={2} className='landing-sidebar-container'></Col>
                         <Col lg={10} className='landing-main-container'>
                              {children}
                         </Col>
                    </Row>
               </Container>
          </React.Fragment>
     );
};

export default LandingLayout;
