import React from 'react'
import './CitiesList.scss'
import CityLi from './CityLi/CityLi'

const CitiesList = props => {
  
  const renderLi = cities => {
    return cities.map((item, index) => {
      return (
        <CityLi key={index}>{item}</CityLi>
      )
    })
  }
  
  return (
    <ul onClick={props.onClick} className={'CitiesList'}>
      {renderLi(props.cities)}
    </ul>
  )
}

export default CitiesList