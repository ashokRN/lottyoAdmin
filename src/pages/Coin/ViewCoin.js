import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../styles/AdminPanel.css';
import ViewTable from '../../components/ViewTable';
import { GET_ALL_COINS } from '../../services/ApiService';

const ViewCoin = ({ history }) => {
     const [coins, setCoins] = React.useState([]);

     // {
     //      "_id": "627baa6b7ad6bdaacaef0c85",
     //      "name": "RRK",
     //      "price": 10,
     //      "status": false,
     //      "block": false,
     //      "active": true,
     //      "createdAt": "2022-05-11T12:22:03.124Z",
     //      "updatedAt": "2022-05-17T14:51:10.281Z",
     //      "__v": 0
     //  },

     const _structureData = (data, index) => {
          let coinData = {};

          coinData['name'] = data.name;
          coinData['price'] = data.price;
          // coinData['status'] = data.status;
          coinData['active'] = (
               <div className='coin-status' active={`${data.active}`}>
                    {data.active === true ? 'ACTIVE' : 'IN-ACTIVE'}
               </div>
          );
          coinData['createdOn'] = data.createdAt.slice(0, 10);

          return coinData;
     };

     const _getCoins = async () => {
          let response;
          try {
               response = await GET_ALL_COINS();
               if (response.success) {
                    let data = response?.coins.map(_structureData);
                    setCoins(data);
               }
          } catch (error) {
               console.log(error);
          }
     };

     React.useEffect(() => _getCoins(), []);

     return (
          <Container className='lottery-admin-panel-view-container' fluid>
               <Row className='lottery-admin-panel-view-table--header-row-container'>
                    <Col lg={10} className='lottery-admin-panel-view-table-header-colum-container'>
                         COINS
                         <div className='lottery-admin-panel-addbtn' onClick={() => history.push('coin/add')}>
                              ADD COIN
                         </div>
                    </Col>
               </Row>
               <Row className='lottery-admin-panel-view-table-row-container'>
                    <Col lg={10} className='lottery-admin-panel-view-table-colum-container'>
                         <ViewTable data={coins} editItem={true} />
                    </Col>
               </Row>
          </Container>
     );
};

export default ViewCoin;
