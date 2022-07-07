import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../styles/AdminPanel.css';
import ViewTable from '../../components/ViewTable';
import { GET_ALL_EVENTS, GET_ALL_TICKETS } from '../../services/ApiService';
import { MdArrowBackIosNew } from "react-icons/md"
import Moment from 'react-moment';
const ViewEvent = ({ history }) => {
     const [actEvent, setAcuEvent] = React.useState();
     const [events, setEvents] = React.useState([]);
     const [hideShow, setHideShow] = React.useState({ hide: true, show: false });
     const [getData, setGetData] = React.useState([])
     const [tickets, setTickets] = React.useState([]);

     const _structureData = (data, index) => {
          let eventData = {};

          // eventData['ID'] = data._id;
          eventData['SL.NO'] = index + 1;
          eventData['name'] = data.name;
          eventData['totalCount'] = data.totalCount;
          eventData['totalColumn'] = data.totalColumn.toString();
          eventData['ticketPrice'] = data.ticketPrice;
          // eventData['maxTicketCount'] = data.maxTicketCount;
          // eventData['minBuyCount'] = data.minBuyCount;
          // eventData['maxBuyCount'] = data.maxBuyCount;
          eventData['maxPrice'] = data.maxPrice;
          eventData['winning'] = data.winningCount;
          eventData['startDate'] = data.startDate.slice(0, 10);
          eventData['closeDate'] = data.closeDate.slice(0, 10);
          eventData['resultDate'] = data.resultDate.slice(0, 10);
          eventData['status'] = <div status={data.status}>{data.status}</div>;
          return eventData;
     };
     const _structureTicketData = (data, index) => {
          let ticketData = {};


          ticketData['SL.NO'] = index + 1;
          ticketData['column'] = data.column;
          ticketData['ticketNumber'] = data.ticketNumber;

          ticketData['price'] = data.price;


          return ticketData;
     };
     const _getEvents = async (id) => {
          let response;
          try {
               response = await GET_ALL_EVENTS();

               if (response.success) {
                    setAcuEvent(response?.events);
                    let data = response?.events.map(_structureData);
                    // console.log(data, "love")
                    setEvents(data);
               }
          } catch (error) {
               console.log(error);
          }
     };

     const _getTickets = async (id) => {
          let response
          try {
               response = await GET_ALL_TICKETS(id);
               if (response.success) {
                    let data = response?.tickets.map(_structureTicketData);
                    setTickets(data)
               }
          } catch (error) {
               console.log(error)
          }
     }
     const _viewData = (index, itemData) => {
          console.log(itemData,"12312312312337/dsfghjgfds");
          let data = actEvent[index];
          setHideShow({ ...hideShow, hide: false, show: true })
          setGetData(itemData);
          _getTickets(data._id)
     };


     React.useEffect(() => _getEvents(), []);

     return (
          <Container className='lottery-admin-panel-view-container' fluid>
               {hideShow.hide && (
                    <>
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
                                   <ViewTable data={events} editItem={true} view={_viewData} />
                              </Col>
                         </Row>
                    </>
               )}

               {hideShow.show && (
                    <>
                         <h4 style={{ marginTop: "20px" }} onClick={() => setHideShow({ ...hideShow, hide: true, show: false })}>
                              <MdArrowBackIosNew />    Event Details
                         </h4>

                         <div className='lottery-admin-panel-outer-table-header'>



                              {getData !== null  && (<Row style={{ rowGap: "20px" }}>
                                   <Col lg={3}>
                                        <div className='lottery-admin-panel-inner-table-header'>
                                             <div className='lottery-admin-panel-inner-table-text'>
                                                  Event Name
                                             </div>
                                             <div className='lottery-admin-panel-inner-table-header-span'>{getData.name}</div>
                                        </div>

                                   </Col>
                                   <Col lg={3}>
                                        <div className='lottery-admin-panel-inner-table-header'>
                                             <div className='lottery-admin-panel-inner-table-text'>
                                                  Total Count
                                             </div>
                                             <div className='lottery-admin-panel-inner-table-header-span'>{getData.totalCount}</div>
                                        </div>
                                   </Col>
                                   <Col lg={3}>
                                        <div className='lottery-admin-panel-inner-table-header'>
                                             <div className='lottery-admin-panel-inner-table-text'>
                                                  Max Price
                                             </div>
                                             <div className='lottery-admin-panel-inner-table-header-span'>{getData.maxPrice}</div>
                                        </div>
                                   </Col>

                                   <Col lg={3}>
                                        <div className='lottery-admin-panel-inner-table-header'>
                                             <div className='lottery-admin-panel-inner-table-text'>
                                                  Price
                                             </div>
                                             <div className='lottery-admin-panel-inner-table-header-span'>{getData.ticketPrice}</div>
                                        </div>

                                   </Col>
                                   <Col lg={3}>
                                        <div className='lottery-admin-panel-inner-table-header'>
                                             <div className='lottery-admin-panel-inner-table-text'>
                                                  Wining
                                             </div>
                                             <div className='lottery-admin-panel-inner-table-header-span'>{getData.winning}</div>
                                        </div>
                                   </Col>
                                   <Col lg={3}>
                                        <div className='lottery-admin-panel-inner-table-header'>
                                             <div className='lottery-admin-panel-inner-table-text'>

                                                  Start Date
                                             </div>
                                             <div className='lottery-admin-panel-inner-table-header-span'>
                                                  <Moment format="DD-MM-YYYY">
                                                       {getData.startDate}
                                                  </Moment>


                                             </div></div>
                                   </Col>
                                   <Col lg={3}>
                                        <div className='lottery-admin-panel-inner-table-header'>
                                             <div className='lottery-admin-panel-inner-table-text'>
                                                  Close Date
                                             </div>
                                             <div className='lottery-admin-panel-inner-table-header-span'>

                                                  <Moment format="DD-MM-YYYY">
                                                       {getData.closeDate}
                                                  </Moment>
                                             </div>
                                        </div>

                                   </Col>









                                   <Col lg={3}>
                                        <div className='lottery-admin-panel-inner-table-header'>
                                             <div className='lottery-admin-panel-inner-table-text'>
                                                  Result Date
                                             </div>
                                             <div className='lottery-admin-panel-inner-table-header-span'>
                                                  <Moment format="DD-MM-YYYY">
                                                       {getData.resultDate}
                                                  </Moment>

                                             </div>
                                        </div>

                                   </Col>
                              </Row>)}

                              <hr />
                              <h4>
                                   Paid Tickets
                              </h4>

                              {tickets.length > 0 && <div>

                                   <Row className='lottery-admin-panel-view-table-row-container'>
                                        <Col lg={10} className='lottery-admin-panel-view-table-colum-container'>
                                             <ViewTable data={tickets} editItem={true} />
                                        </Col>
                                   </Row>
                              </div>}
                         </div>



                    </>
               )}
          </Container>
     );
};

export default ViewEvent;
