import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../styles/AdminPanel.css';
import Input from '../../components/Input';
import { MdArrowBack } from 'react-icons/md';
import { ADD_EVENT } from '../../services/ApiService';

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

     const _singleEntryHandler = (name, value) => {
          setEntry({ ...entry, [name]: value });
     };



     const _onSubmit = async () => {
          let body = {
               ...entry,
               userId: '6279264f16748f6d9bb92f46',
               startDate: new Date(entry['startDate']).toISOString(),
               closeDate: new Date(entry['closeDate']).toISOString(),
               resultDate: new Date(entry['resultDate']).toISOString(),
          };
          let response;
          try {
               response = await ADD_EVENT(body);
               if (response?.success) {
                    history.push('/event');
               }
          } catch (error) {
               console.log(error);
          }
     };

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
                              <Input
                                   name='Event Name'
                                   keyname={'name'}
                                   textChange={_singleEntryHandler}
                                   placeholder='Enter event name'
                                   width='98%'
                                   value={entry['name']}
                              />
                              <div className='splitter-des-container'>
                                   <Input
                                        name='Total Count'
                                        type='number'
                                        keyname={'totalCount'}
                                        textChange={_singleEntryHandler}
                                        placeholder='Enter total count'
                                        width='25%'
                                        value={entry['totalCount']}
                                   />
                                   <Input
                                        name='Ticket Price'
                                        type='number'
                                        keyname={'ticketPrice'}
                                        textChange={_singleEntryHandler}
                                        placeholder='Enter ticket price'
                                        width='25%'
                                        value={entry['ticketPrice']}
                                   />
                                   <Input
                                        name='Winning Count'
                                        type='number'
                                        keyname={'winningCount'}
                                        textChange={_singleEntryHandler}
                                        placeholder='Enter winning count'
                                        width='25%'
                                        value={entry['winningCount']}
                                   />
                                   <Input
                                        name='Max Price'
                                        type='number'
                                        keyname={'maxPrice'}
                                        textChange={_singleEntryHandler}
                                        placeholder='Enter max price'
                                        width='25%'
                                        value={entry['maxPrice']}
                                   />
                              </div>
                              <div className='splitter-des-container'>
                                   <Input
                                        name='Start Date'
                                        keyname={'startDate'}
                                        textChange={_singleEntryHandler}
                                        placeholder='select start date'
                                        width='30%'
                                        type='datetime-local'
                                        value={entry['startDate']}
                                   />
                                   <Input
                                        name='End Date'
                                        keyname={'closeDate'}
                                        textChange={_singleEntryHandler}
                                        placeholder='select end date'
                                        width='30%'
                                        type='datetime-local'
                                        value={entry['closeDate']}
                                   />
                                   <Input
                                        name='Result Date'
                                        keyname={'resultDate'}
                                        textChange={_singleEntryHandler}
                                        placeholder='select result date'
                                        width='30%'
                                        type='datetime-local'
                                        value={entry['resultDate']}
                                   />
                              </div>
                              <div className='splitter-des-container'>
                                   <Input
                                        name='Min Buy Count'
                                        keyname={'minBuyCount'}
                                        textChange={_singleEntryHandler}
                                        placeholder='Enter min count'
                                        width='50%'
                                        value={entry['minBuyCount']}
                                   />
                                   <Input
                                        name='Max Buy Count'
                                        keyname={'maxBuyCount'}
                                        textChange={_singleEntryHandler}
                                        placeholder='Enter max count'
                                        width='50%'
                                        value={entry['maxBuyCount']}
                                   />
                              </div>
                         </div>
                    </Col>
               </Row>
               <Row className='lottery-admin-panel-view-table-btn-row-container'>
                    <Col lg={10} className='lottery-admin-panel-view-table-btn-colum-container'>
                         <div className='reset-btn'>Reset</div>
                         <div className='create-btn' onClick={_onSubmit}>
                              Create
                         </div>
                    </Col>
               </Row>
          </Container>
     );
};

export default AddEvent;
