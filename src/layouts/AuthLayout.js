import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './layout.css';

const AuthLayout = ({ children }) => {
     return (
          <React.Fragment>
               <Container fluid>
                    <Row className='auth-layout-row-container'>
                         <Col lg={10} className='auth-layout-colum-container'>
                              {children}
                         </Col>
                    </Row>
               </Container>
          </React.Fragment>
     );
};

export default AuthLayout;
