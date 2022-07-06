import React from 'react';
import './index.css';

const NAVS = [
     { name: 'Events', path: '/event' },
     { name: 'Users', path: '/user' },
     { name: 'Coin', path: '/coin' },
     { name: 'Payment', path: '/payment' },
     { name: 'Result', path: '/result' }
];

const SideBar = ({ history }) => {
     let items = [];

     let ModuleName = window.location.pathname.split('/')[1];

     console.log(ModuleName);

     for (let index = 0; index < NAVS.length; index++) {
          const element = NAVS[index];
          items.push(
               <React.Fragment>
                    <div
                         className={`side-bar-item${element.path === `/${ModuleName}` ? '-active' : ''}`}
                         onClick={() => history.push(element.path)}>
                         {element.name}
                    </div>
                    <div className='divider' />
               </React.Fragment>,
          );
     }
     return <div className='side-bar-container'>{items}</div>;
};

export default SideBar;
