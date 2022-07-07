import React from 'react';
import Select from 'react-select';
import { Container, Row, Col, Badge } from 'reactstrap';
import '../styles/AdminPanel.css';
import { GET_ALL_EVENTS, ADD_RESULT, GET_TICKETS_EVENT, GET_WINNERS_EVENT } from './../../services/ApiService';

const AddResult = ({ history }) => {
     const [events, setEvents] = React.useState([]);
     const [event, setEvent] = React.useState({});
     const [winners, setWinners] = React.useState([]);
     const [ticket, setTicket] = React.useState([]);
     const [select, setSelect] = React.useState(null);
     const [select1, setSelect1] = React.useState(null);
     const [selected, setSelected] = React.useState([]);
     const _getEvents = async () => {
          let response;
          try {
               response = await GET_ALL_EVENTS('status=CLOSED');
               if (response.success) {
                    let data = response?.events.map((x, i) => {
                         return { value: x._id, label: `${x.name} Event (${String(x.startDate).substring(0, 10)})`, ...x };
                    });
                    console.log(data);
                    setEvents(data);
               }
          } catch (error) {
               console.log(error);
          }
     };

     const submitResult = async() => {
          if(selected.length !== select.winningCount){
               alert(`You need to select more ${select.winningCount-selected.length} Winners`);
          }else{
               let response;
               try {
                    response = await ADD_RESULT({ event: select._id, tickets: selected });
                    console.log(response, 'EVENTS');
                    if (response.success) {
                      history.push('/result');
                    }
               } catch (error) {
                    console.log(error);
               }
          }
     }

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

     const _getWinner = async (id) => {
          let response;
          try {
               response = await GET_WINNERS_EVENT(id);
               console.log(response, 'WINNER');
               if (response.success) {
                    let datas = response?.winners;
                    setWinners(structuredata(datas));
                    let data = response?.event;
                    setEvent(data);
               }
          } catch (error) {
               console.log(error);
          }
     };

     React.useEffect(() => _getEvents(), []);

     const selectEvent = async(e) => {
          setSelect(e);
          _getWinner(e._id);
          let response;
          try {
               response = await GET_TICKETS_EVENT(e._id);
               if (response.success) {
                    let data = response?.tickets.map(x=> ({ value: x._id, label: `${x.column}-${x.ticketNumber}`, ...x }));
                    console.log(data);
                    setTicket(data);
               }
          } catch (error) {
               console.log(error);
          }
     }

     const selectTicket = (e) => {
          if(selected.length === select.winningCount){
               alert("Alrady reached the winning count limit");
          }else{
               setSelect1(e)
               setSelected(e.map(x=> x._id));
          }
     }

     return (
          <Container className='lottery-admin-panel-view-container' fluid>
               <Row className='lottery-admin-panel-view-table--header-row-container'>
                    <Col lg={10} className='lottery-admin-panel-view-table-header-colum-container'>
                         ADD RESULT
                    </Col>
               </Row>
               <Row className='lottery-admin-panel-view-table-row-container'>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                         <Row>
                              <Col lg={12}>
                                   <p>EVENT</p>
                                   <Select
                                        placeholder={'Select Event'}
                                        value={select}
                                        options={events}
                                        onChange={(e) => selectEvent(e)}
                                   />
                              </Col>
                         </Row>
                         <Row className='lottery-admin-panel-view-table--header-row-container'>
                              <Col lg={12} className='lottery-admin-panel-view-table-header-colum-container'>
                                   <p className={'font-size-name'}>SELECT TICKET</p>
                              </Col>
                         </Row>
                         <Row>
                              <Col lg={8}>
                                   <p>Ticket</p>
                                   <Select
                                        placeholder={'Select Ticket'}
                                        value={select1}
                                        options={ticket}
                                        isMulti={true}
                                        closeMenuOnSelect={false}
                                        onChange={(e) => selectTicket(e)}
                                        isDisabled={ticket.length === 0}
                                   />
                              </Col>
                         </Row>
                         <Row style={{padding: '10px'}}>
                              <Col lg={6}></Col>
                              <Col lg={3} style={{ display: 'flex', alignItems: 'flex-end' }}>
                                   <div className='remove-btn' onClick={()=> setSelected([])}>
                                        RESET
                                   </div>
                              </Col>
                              <Col lg={3} style={{ display: 'flex', alignItems: 'flex-end' }}>
                                   <div className='add-btn' onClick={submitResult}>
                                        ADD
                                   </div>
                              </Col>
                         </Row>
                    </Col>
                    <Col lg={3}></Col>
               </Row>
          </Container>
     );
};

export default AddResult;
