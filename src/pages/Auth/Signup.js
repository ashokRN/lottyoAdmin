import React from 'react';
import './style.css';

const Signup = () => {
     return (
          <div className='auth-outter-container'>
               <div className='auth-inner-container'>
                    <div className='auth-title-con'>
                         <div className='auth-title'>Signup</div>
                    </div>
                    <div className='auth-input-item-container'>
                         <div className='auth-input-name'>Name</div>
                         <div className='auth-input-container'>
                              <input placeholder='Enter name' />
                         </div>
                    </div>
                    <div className='auth-input-item-container'>
                         <div className='auth-input-name'>Email</div>
                         <div className='auth-input-container'>
                              <input placeholder='Enter email' />
                         </div>
                    </div>
                    <div className='auth-input-item-container'>
                         <div className='auth-input-name'>Password</div>
                         <div className='auth-input-container'>
                              <input placeholder='Enter password' />
                         </div>
                    </div>
                    <div className='auth-input-item-container'>
                         <div className='auth-input-name'>Coniform Password</div>
                         <div className='auth-input-container'>
                              <input placeholder='Enter coniform password' />
                         </div>
                    </div>
                    <div className='auth-input-item-container-btn'>Signup</div>
               </div>
          </div>
     );
};

export default Signup;
