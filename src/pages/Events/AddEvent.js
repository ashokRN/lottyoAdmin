import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../styles/AdminPanel.css';
import Input from '../../components/Input';
import { MdArrowBack } from 'react-icons/md';

/**
 * 
 * "name":"Diamond",
    "totalCount":2000,
    "ticketPrice":10,
    "winningCount":3,
    "maxPrice":100,
    "startDate":"2022-06-17T20:38:25",
    "closeDate":"2022-06-21T21:50:25",
    "resultDate":"2022-06-22T24:00:00",
    "minBuyCount":1,
    "maxBuyCount":10
 */
const AddEvent = ({ history }) => {
     const [entry, setEntry] = React.useState({});
     return (
          <Container className='lottery-admin-panel-view-container' fluid>
               <Row className='lottery-admin-panel-view-table--header-row-container'>
                    <Col lg={10} className='lottery-admin-panel-view-table-header-colum-container'>
                         <div className='back-header-container'>
                              <div className='back-header-icon' onClick={() => history.push('/event')}>
                                   <MdArrowBack onClick={() => history.push('/event')} />
                              </div>
                              <div className='back-header-name'>ADD EVENT</div>
                         </div>
                    </Col>
               </Row>
               <Row className='lottery-admin-panel-view-table-row-container'>
                    <Col lg={10} className='lottery-admin-panel-view-table-colum-container'>
                         <div className='lottert-admin-panel-form-container'>
                              <Input name='Event Name' placeholder='Enter event name' width='98%' />
                              <div className='splitter-des-container'>
                                   <Input name='Total Count' placeholder='Enter total count' width='25%' />
                                   <Input name='Ticket Price' placeholder='Enter ticket price' width='25%' />
                                   <Input name='Winning Count' placeholder='Enter winning count' width='25%' />
                                   <Input name='Max Price' placeholder='Enter max price' width='25%' />
                              </div>
                              <div className='splitter-des-container'>
                                   <Input name='Start Date' placeholder='Enter event name' width='30%' type='date' />
                                   <Input name='End Date' placeholder='Enter event name' width='30%' type='date' />
                                   <Input name='Result Date' placeholder='Enter event name' width='30%' type='date' />
                              </div>
                              <div className='splitter-des-container'>
                                   <Input name='Min Buy Count' placeholder='Enter min count' width='50%' />
                                   <Input name='Max Buy Count' placeholder='Enter max count' width='50%' />
                              </div>
                         </div>
                    </Col>
               </Row>
               <Row className='lottery-admin-panel-view-table-btn-row-container'>
                    <Col lg={10} className='lottery-admin-panel-view-table-btn-colum-container'>
                         <div className='reset-btn'>Reset</div>
                         <div className='create-btn'>Create</div>
                    </Col>
               </Row>
          </Container>
     );
};

export default AddEvent;
