import React from 'react'
import './CityCard.scss'
import Button from '../UI/Button/Button'

const CityCard = props => {
  
  const style = {
    transform: `rotate(-${props.wind.direction}deg)`
  }
  
  return (
    <div className={'CityCard'}>
      <strong>Город: {props.city}</strong>
      <div>
        <p>Температура: {props.temperature}&#176;C</p>
        <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt={props.description}/>
      </div>
      <p>Влажность: {props.humidity}%</p>
      <p>Атмосферное давление: {props.atmospherePressure}</p>
      <p>Сила и направление ветра: {props.wind.speed}М/C - <i style={style} className="fa fa-arrow-right"></i></p>
      <p>Последнее обновление данных: {`${props.update.day} ${props.update.month} ${props.update.year} ${props.update.time}`}</p>
      <div>
        <Button onClick={() => props.onClickDelete(props.id)} type={'delete'}>Удалить</Button>
        <Button onClick={() => props.onClickUpdate(props.id)} type={'update'}>Обновить</Button>
      </div>
    </div>
  )
}

export default CityCard