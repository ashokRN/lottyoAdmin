import React from 'react';
import './style.css';

const Login = () => {
     return (
          <div className='auth-outter-container'>
               <div className='auth-inner-container'>
                    <div className='auth-title-con'>
                         <div className='auth-title'>Login</div>
                    </div>
                    <div className='auth-input-item-container'>
                         <div className='auth-input-name'>Username</div>
                         <div className='auth-input-container'>
                              <input placeholder='Username' />
                         </div>
                    </div>
                    <div className='auth-input-item-container'>
                         <div className='auth-input-name'>Password</div>
                         <div className='auth-input-container'>
                              <input placeholder='Password'  type={'password'}/>
                         </div>
                    </div>
                    <div className='auth-input-item-container-btn'>Login</div>
               </div>
          </div>
     );
};

export default Login;
