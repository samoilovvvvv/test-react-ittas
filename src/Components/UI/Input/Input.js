import React from 'react'
import './Input.scss'

const Input = props => {
  const htmlFor = Math.random()
  const type = props.type || 'text'
  const cls = ['Input']
  
  if (type === 'text') cls.push('text')
  
  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        id={htmlFor}
        type={type}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
    
  )
}

export default Input