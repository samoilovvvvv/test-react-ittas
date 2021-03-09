import React from 'react'
import './Widget.scss'

const Widget = props => {
  
  props.data.sort((a, b) => {
    return a.temperature - b.temperature
  })
  
  const minTemp = props.data[0]
  const maxTemp = props.data[props.data.length - 1]
  
  return (
    <div className={'Widget'}>
      <p>Максимальная температура: {maxTemp.city} {maxTemp.temperature}&#176;C</p>
      <p>Минимальная температура: {minTemp.city} {minTemp.temperature}&#176;C</p>
    </div>
  )
}

export default Widget