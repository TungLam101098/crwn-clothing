import React from 'react';
import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...ortherProps}) => {
  return (
    <div className='group'>
      {
        label ? 
        (<label className={`${ortherProps.value.length ? 'shrink' : ''}form-input-label` }>{label}</label>)
        : null
      }
      <input className='form-input' onChange={handleChange} {...ortherProps} />
    </div>
  )
}

export default FormInput
