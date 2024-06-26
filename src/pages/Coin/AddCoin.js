import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../styles/AdminPanel.css';
import Input from '../../components/Input';
import { MdArrowBack } from 'react-icons/md';
import { ADD_COIN } from '../../services/ApiService';

const AddCoin = ({ history }) => {
     const [entry, setEntry] = React.useState({});

     const _singleEntryHandler = (name, value) => {
          setEntry({ ...entry, [name]: value });
     };

     const _onSubmit = async () => {
          let body = {
               userId: '6279264f16748f6d9bb92f46',
               ...entry,
               status: false,
          };
          let response;
          try {
               response = await ADD_COIN(body);
               if (response?.success) {
                    history.push('/coin');
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
                              <div className='back-header-icon' onClick={() => history.push('/coin')}>
                                   <MdArrowBack onClick={() => history.push('/coin')} />
                              </div>
                              <div className='back-header-name'>ADD COIN</div>
                         </div>
                    </Col>
               </Row>
               <Row className='lottery-admin-panel-view-table-row-container'>
                    <Col lg={10} className='lottery-admin-panel-view-table-colum-container'>
                         <div className='lottert-admin-panel-form-container'>
                              <div className='splitter-des-container'>
                                   <Input
                                        name='Coin Name'
                                        keyname={'name'}
                                        textChange={_singleEntryHandler}
                                        placeholder='Enter coin name'
                                        width='50%'
                                        value={entry['name']}
                                   />
                                   <Input
                                        name='Price'
                                        keyname={'price'}
                                        value={entry['price']}
                                        textChange={_singleEntryHandler}
                                        placeholder='Enter price'
                                        width='50%'
                                   />
                                   {/* <Input name='Active' placeholder='Select coin status' width='50%' /> */}
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

export default AddCoin;
