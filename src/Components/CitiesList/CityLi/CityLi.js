import React from 'react'
import './CityLi.scss'

const CityLi = props => {
  return (
    <li className={'CityLi'}>{props.children}</li>
  )
}

export default CityLi