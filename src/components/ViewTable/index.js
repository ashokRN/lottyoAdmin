import React from 'react';
import './index.css';
import { AiTwotoneEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { BsEyeFill } from 'react-icons/bs';
import { CAMEL_TO_WORD } from '../../utils/StringFormater';

const sampleData = [
     {
          name: 'Ashok',
          mobile: 8428129205,
          email: 'ashokask186@gmail.com',
          pinCode: '641606',
     },
     {
          name: 'Arun',
          mobile: 9092973115,
          email: 'arun.s@gmail.com',
     },
     {
          name: 'Nandha',
          mobile: 7200511649,
          email: 'nandha@gmail.com',
     },
     {
          name: 'Sathish',
          mobile: 7010977849,
          email: 'sathish@gmail.com',
          pinCode: '641606',
     },
     {
          name: 'Akash',
          mobile: 8072491610,
          email: 'akash@gmail.com',
     },
];

const strs = ['organization', 'discipline'];

const removeStr = (str) => {
     return str.replace(strs[0], '').replace(strs[1], '');
};

const ViewTable = ({ data = sampleData, removeItem, viewItem, deleteItem = false, editItem = false, editFn, viewBtn = true }) => {
     let TableHeaderData = Object.keys(Object.assign({}, ...data));

     const ViewBtn = ({ index }) => {
          return (
               <td>
                    <div className='view-table-delete-btn-con'>
                         <BsEyeFill onClick={() => viewItem(index)} color={'#00c851'} size={18} />
                    </div>
               </td>
          );
     };

     const DeleteBtn = ({ index }) => {
          return (
               <td>
                    <div className='view-table-delete-btn-con'>
                         <MdDelete onClick={() => removeItem(index)} color={'#ff4444'} size={18} />
                    </div>
               </td>
          );
     };
     const EditBtn = ({ data }) => {
          return (
               <td>
                    <div className='view-table-delete-btn-con' onClick={() => editFn(data)}>
                         <AiTwotoneEdit onClick={() => editFn(data)} color={'#207fdb'} size={18} />
                    </div>
               </td>
          );
     };
     const TableHead = ({ headData = [] }) => {
          let heads = [];
          for (let index = 0; index < headData.length; index++) {
               if (headData[index] !== 'ID') {
                    heads.push(
                         <th key={index} className='view-table-header-colum'>
                              {CAMEL_TO_WORD(removeStr(String(headData[index])))}
                         </th>,
                    );
               }
          }
          return (
               <thead>
                    <tr>
                         {/* <th>#</th> */}
                         {heads}
                         {viewBtn && <th className='view-table-header-colum'>View</th>}
                         {editItem && <th className='view-table-header-colum'>Edit</th>}
                         {deleteItem && <th className='view-table-header-colum'>Delete</th>}
                    </tr>
               </thead>
          );
     };

     const TableBody = ({ tableData = [] }) => {
          let bodyTable = [];
          for (let index = 0; index < tableData.length; index++) {
               const element = tableData[index];
               let jsx = (
                    <tr key={index}>
                         {/* <th scope='row'>{index + 1}</th> */}
                         {TableHeaderData.map((x, i) =>  x !== 'ID' && <td key={i} className={'view-table-body-colum'}>{element[x]}</td>)}
                         {viewBtn && <ViewBtn index={index} />}
                         {editItem && <EditBtn data={element} />}
                         {deleteItem && <DeleteBtn index={index} />}
                    </tr>
               );

               bodyTable.push(jsx);
          }

          return <tbody>{bodyTable}</tbody>;
     };

     return (
          <div className='view-table-container'>
               <div className='tableFixHead'>
                    <table className='table-striped'>
                         <TableHead headData={Object.keys(Object.assign({}, ...data))} />
                         <TableBody tableData={data} />
                    </table>
               </div>
          </div>
     );
};

export default ViewTable;
