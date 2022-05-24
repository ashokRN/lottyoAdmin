import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../styles/AdminPanel.css';
import ViewTable from '../../components/ViewTable';

const ViewEvent = ({ history }) => {
     return (
          <Container className='lottery-admin-panel-view-container' fluid>
               <Row className='lottery-admin-panel-view-table--header-row-container'>
                    <Col lg={10} className='lottery-admin-panel-view-table-header-colum-container'>
                         Event
                         <div className='lottery-admin-panel-addbtn' onClick={() => history.push('event/add')}>
                              ADD EVENT
                         </div>
                    </Col>
               </Row>
               <Row className='lottery-admin-panel-view-table-row-container'>
                    <Col lg={10} className='lottery-admin-panel-view-table-colum-container'>
                         <ViewTable editItem={true} />
                    </Col>
               </Row>
          </Container>
     );
};

export default ViewEvent;
