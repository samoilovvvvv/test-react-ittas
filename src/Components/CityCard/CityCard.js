import React from 'react'
import './CityCard.scss'
import Button from '../UI/Button/Button'

const CityCard = props => {
  return (
    <div className={'CityCard'}>
      <strong>Город: Минск</strong>
      <p>Температура: 0c</p>
      <p>Влажность: 52%</p>
      <p>Атмосферное давление 1015</p>
      <p>Сила и направление ветра: 3.02М/C</p>
      <p>Последнее обновление данных: 4 Марта 2021 09:00:00</p>
      <div>
        <Button type={'delete'}>Удалить</Button>
        <Button type={'update'}>Обновить</Button>
      </div>
    </div>
  )
}

export default CityCard