import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import SideBar from '../components/SideBar';
import './layout.css';

const LandingLayout = ({ children, history }) => {
     return (
          <React.Fragment>
               <Container fluid>
                    <Row className='header-row-container'>
                         <Col lg={12} className='header-colum-container'>
                              <div className='header-container'>Lottery Admin</div>
                         </Col>
                    </Row>
                    <Row>
                         <Col lg={2} className='landing-sidebar-container'>
                              <SideBar history={history} />
                         </Col>
                         <Col lg={10} className='landing-main-container'>
                              {children}
                         </Col>
                    </Row>
               </Container>
          </React.Fragment>
     );
};

export default LandingLayout;
