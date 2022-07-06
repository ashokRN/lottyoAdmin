import React from 'react';
import Select from 'react-select';
import { Container, Row, Col, Badge } from 'reactstrap';
import '../styles/AdminPanel.css';
import { GET_ALL_EVENTS, ADD_RESULT } from './../../services/ApiService';

const AddResult = () => {
     const [events, setEvents] = React.useState([]);
     const [column, setColumns] = React.useState([]);
     const [ticket, setTicket] = React.useState([]);
     const [select, setSelect] = React.useState(null);
     const [select1, setSelect1] = React.useState(null);
     const [select2, setSelect2] = React.useState(null);
     const [selected, setSelected] = React.useState([]);
     const _getEvents = async () => {
          let response;
          try {
               response = await GET_ALL_EVENTS();
               console.log(response, 'EVENTS');
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
        let response;
        try {
             response = await ADD_RESULT({ event: select._id, priceList: selected.map(x=> x.ticketNo) });
             console.log(response, 'EVENTS');
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
     }

     const selectColumn = (e) => {
          setSelect1(e);
          setSelect2(null);
          let val =
               select.totalCount - parseInt(e.index) * select.maxTicketCount >= select.maxTicketCount
                    ? select.maxTicketCount
                    : select.totalCount - parseInt(e.index) * select.maxTicketCount;
          let childs = [];
          for (let z = 0; z < val; z++) {
               childs.push({ label: z + 1, value: z + 1 });
          }
          setTicket(childs);
     };

     const addTickets = () => {
          if (selected.length !== select.winningCount) {
               let data = {
                    column: select1.value,
                    ticket: select2.value,
                    ticketNo: select1.index * select.maxTicketCount + parseInt(select2.value),
               };
               if (selected.filter((x) => x.ticketNo === data.ticketNo).length !== 0) {
                    alert('Ticket already selected');
               } else {
                    setSelected([...selected, data]);
               }
          } else {
               alert('Reached max winning count');
          }
          setSelect1(null);
          setTicket([]);
          setSelect2(null);
     };

     React.useEffect(() => _getEvents(), []);

     const selectEvent = (e) => {
          setSelect(e);
          setColumns([]);
          setSelect1(null);
          setTicket([]);
          setSelect2(null);
          setColumns(e.totalColumn.map((x, i) => ({ label: x, value: x, index: i })));
     };
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
                              <Col lg={5}>
                                   <p>Column</p>
                                   <Select
                                        placeholder={'Select Column'}
                                        value={select1}
                                        options={column}
                                        onChange={(e) => selectColumn(e)}
                                        isDisabled={column.length === 0}
                                   />
                              </Col>
                              <Col lg={5}>
                                   <p>Ticket Number</p>
                                   <Select
                                        placeholder={'Select Ticket'}
                                        value={select2}
                                        options={ticket}
                                        onChange={(e) => setSelect2(e)}
                                        isDisabled={select1 === null}
                                   />
                              </Col>
                              <Col lg={2} style={{ display: 'flex', alignItems: 'flex-end' }}>
                                   <div className='add-btn' onClick={addTickets}>
                                        ADD
                                   </div>
                              </Col>
                         </Row>
                         <Row className='lottery-admin-panel-view-table--header-row-container'>
                              <Col lg={12} className='lottery-admin-panel-view-table-header-colum-container'>
                                   <p className={'font-size-name'}>SELECTED TICKETS</p>
                              </Col>
                         </Row>
                         <Row>
                              <Col lg={12} className=''>
                                   <Row>
                                        {selected.map((x) => (
                                             <Col lg={2}>
                                                  <Badge color='success' style={{ padding: '10px', margin: '5px', width: '100%' }}>
                                                       {x.column} - {x.ticket}
                                                  </Badge>
                                             </Col>
                                        ))}
                                   </Row>
                              </Col>
                         </Row>
                         <Row>
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
