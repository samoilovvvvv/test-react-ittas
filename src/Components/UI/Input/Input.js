import React from 'react'
import './Input.scss'

const Input = props => {
  const htmlFor = Math.random()
  const type = props.type || 'text'
  const cls = ['Input']
  const onChange = type === 'text' ? props.onChangeInput : props.onChangeCheckbox
  
  if (type === 'text') cls.push('text')
  
  if (type === 'checkbox') cls.push('checkbox')
  
  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        id={htmlFor}
        type={type}
        value={props.value}
        onChange={onChange}
        readOnly={props.readOnly}
      />
    </div>
    
  )
}

export default Input