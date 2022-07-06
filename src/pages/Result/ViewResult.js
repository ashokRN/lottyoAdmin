import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../styles/AdminPanel.css';
import ViewTable from '../../components/ViewTable';
import { GET_ALL_EVENTS } from '../../services/ApiService';

const ViewResult = ({ history }) => {
     const [events, setEvents] = React.useState([]);

     const _structureData = (data, index) => {
          let eventData = {};

          eventData['ID'] = data._id;
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

          return eventData;
     };

     const _getEvents = async () => {
          let response;
          try {
               response = await GET_ALL_EVENTS();
               console.log(response, 'EVENTS');
               if (response.success) {
                    let data = response?.events.map(_structureData);
                    setEvents(data);
               }
          } catch (error) {
               console.log(error);
          }
     };

     React.useEffect(() => _getEvents(), []);

     return (
          <Container className='lottery-admin-panel-view-container' fluid>
               <Row className='lottery-admin-panel-view-table--header-row-container'>
                    <Col lg={10} className='lottery-admin-panel-view-table-header-colum-container'>
                         RESULT
                         <div className='lottery-admin-panel-addbtn' onClick={() => history.push('result/add')}>
                              ADD RESULT
                         </div>
                    </Col>
               </Row>
               <Row className='lottery-admin-panel-view-table-row-container'>
                    <Col lg={10} className='lottery-admin-panel-view-table-colum-container'>
                        <ViewTable data={events} viewItem={(index) => history.push(`result/view/${events[index].ID}`)} viewBtn={false} />
                    </Col>
               </Row>
          </Container>
     );
};

export default ViewResult;
