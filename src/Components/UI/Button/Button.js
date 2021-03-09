import React from 'react'
import './Button.scss'

const Button = props => {
  const cls = ['Button']
  
  if (props.type) {
    cls.push(props.type)
  }
  
  return (
    <button onClick={props.onClick} className={cls.join(' ')}>{props.children}</button>
  )
}

export default Button