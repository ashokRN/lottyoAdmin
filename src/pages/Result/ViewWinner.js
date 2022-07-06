import React from 'react';
import { useParams } from 'react-router';
import { GET_WINNERS_EVENT } from '../../services/ApiService';
import { Container, Row, Col } from 'reactstrap';
import '../styles/AdminPanel.css';
import ViewTable from '../../components/ViewTable';

const ViewWinner = () => {
     const [winners, setWinners] = React.useState([]);
     const [event, setEvent] = React.useState({});
     let { id } = useParams();

     const structuredata = (data) => {
        return data.map((x,i)=> {
            return {
                ['SL.NO']: (i+1),
                ticketColumn: x.ticket.column,
                ticketNumber: x.ticket.ticketNumber,
                user: x.user.userName,
                winningPercent: x.percentage
            }
        })
     };

     const _getWinner = async () => {
          let response;
          try {
               response = await GET_WINNERS_EVENT(id);
               console.log(response, 'WINNER');
               if (response.success) {
                    let datas = response?.winners;
                    setWinners(structuredata(datas));
                    console.log(structuredata(datas));
                    let data = response?.event;
                    setEvent(data);
               }
          } catch (error) {
               console.log(error);
          }
     };

     React.useEffect(() => _getWinner(), []);

     return (
          <Container className='lottery-admin-panel-view-container' fluid>
               <Row className='lottery-admin-panel-view-table--header-row-container'>
                    <Col lg={10} className='lottery-admin-panel-view-table-header-colum-container'>
                        EVENT RESULT
                    </Col>
               </Row>
               <Row className='lottery-admin-panel-view-table--header-row-container'>
                    <Col lg={2} className='lottery-admin-panel-view-table-header-colum-container'>
                         <p className='font-size-name'>EVENT NAME: {String(event.name  ).substring(0, 10)}</p>
                    </Col>
                    <Col lg={2} className='lottery-admin-panel-view-table-header-colum-container'>
                         <p className='font-size-name'>Start Date: {String(event.startDate).substring(0, 10)}</p>
                    </Col>
                    <Col lg={2} className='lottery-admin-panel-view-table-header-colum-container'>
                         <p className='font-size-name'>Close Date: {String(event.closeDate).substring(0, 10)}</p>
                    </Col>
                    <Col lg={2} className='lottery-admin-panel-view-table-header-colum-container'>
                        <p className='font-size-name'>Total Ticket: {String(event.totalCount).substring(0,10)}</p>
                    </Col>  
                    <Col lg={2} className='lottery-admin-panel-view-table-header-colum-container'>
                         <p className='font-size-name'>No Of Winners: {String(event.winningCount).substring(0, 10)}</p>
                    </Col>
               </Row>
               <Row className='lottery-admin-panel-view-table-row-container'>
                    <Col lg={10} className='lottery-admin-panel-view-table-colum-container'>
                        <ViewTable data={winners} />
                    </Col>
               </Row>
          </Container>
     );
};

export default ViewWinner;
