import React from 'react';
import './index.css';

const Input = ({
     name = 'Input',
     placeholder = '',
     width = '200px',
     height = '80px',
     inputHeight = '40px',
     keyname,
     style,
     textChange,
     value = '',
     type = 'text',
     error = false,
     disable = false,
     avoidSplChar = false,
}) => {
     const inputProps = {
          style: { ...style, width: width, height: height },
     };

     const _handleOnChange = (e) => {
          let value = avoidSplChar ? e.target.value.replace(/[^\w\s]/gi, '') : e.target.value;
          textChange(keyname, value);
     };
     return (
          <div className='lottery-admin-panel-input-container' {...inputProps}>
               <div className={'lottery-admin-panel-input-name-block'}>{name}</div>
               <input
                    type={type}
                    className={`lottery-admin-panel-input ${error ? 'error-field' : ''}`}
                    placeholder={placeholder !== '' ? placeholder : name}
                    style={{ height: inputHeight }}
                    onChange={_handleOnChange}
                    value={value ?? ''}
                    disabled={disable}
               />
          </div>
     );
};

export default Input;
