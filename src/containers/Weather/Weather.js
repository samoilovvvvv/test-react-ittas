import React, {Component} from 'react'
import './Weather.scss'
import Input from '../../Components/UI/Input/Input'
import CitiesList from '../../Components/CitiesList/CitiesList'
import CityCard from '../../Components/CityCard/CityCard'
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage'
import axios from 'axios'
const cities = require('./cities.json')
export default class Weather extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cities: [],
      weather: [],
      inputs: {
        input: {
          value: '',
          type: 'text'
        },
        checkbox: {
          type: 'checkbox',
          label: 'Автообновление 10с'
        }
      }
    }
  }
  
  async getWeatherData(city) {
    try {
      const response = await axios.get(`
        https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=97fcc61e7b4cfb8067a38802ac3e2bd8&lang=ru&units=metric
      `)
      const {weather} = this.state
      
      console.log(response.data)
      
      const data = {
        city: response.data.name,
        temperature: Math.round(response.data.main.temp),
        humidity: response.data.main.humidity,
        atmospherePressure: response.data.main.pressure,
        wind: {
          speed: response.data.wind.speed,
          direction: response.data.wind.deg
        },
        icon: response.data.weather[0].icon,
        update: this.getTime(),
        failedRequest: false
      }
      
      weather.push(data)
      
      this.setState({
        weather
      })
      
    } catch (e) {
      const {weather} = this.state
      
      weather.push({failedRequest: true})
      
      this.setState({
        weather
      })
      
      console.error(e)
    }
    
  }
  
  getTime() {
    const date = new Date().toLocaleString()
    const months = [
      'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа',
      'Сентября', 'Октября', 'Ноября', 'Декабря'
    ]
    
    let day = date.slice(0, 2)
    let month = date.slice(3, 5)
    const year = date.slice(6, 10)
    const time = date.slice(12)

    if (day[0] === '0') day = day[1]

    if (month[0] === '0') month = month[1]
    
    month = months[Number(month) - 1]

    
    return {
      day,
      month,
      year,
      time
    }
  }
  
  renderCitiesCard() {
    return this.state.weather.map((item, index) => {
      return (
        item.failedRequest === false
        
        ? <CityCard
            key={index}
            city={item.city}
            temperature={item.temperature}
            humidity={item.humidity}
            atmospherePressure={item.atmospherePressure}
            wind={item.wind}
            update={item.update}
            icon={item.icon}
          />
          
        : <ErrorMessage/>
      )
    })
  }
  
  changeInputHandler(event) {
    const inputs = {...this.state.inputs}
    const {input} = inputs
    let citiesState = []
    
    input.value = event.target.value
    
    inputs['input'] = input
    
    this.setState({
      inputs
    })
    
    if (event.target.value !== '' && event.target.value.length >= 3) {
      const city = cities.filter(item => {
        const fixItem = item.name.toLowerCase()
        return fixItem.startsWith(event.target.value.toLowerCase())
      })

      citiesState = city.map(item => {
        return item.name
      })
      
      this.setState({
        cities: citiesState
      })
      
    } else {
      this.setState({
        cities: []
      })
    }
    
  }
  
  clickCityHandler(event) {
    if (event.target.tagName === 'LI') {
      this.getWeatherData(event.target.innerText)
    }
    
  }
  
  clickWeatherHandler() {
    const inputs = {...this.state.inputs}
    const {input} = inputs
  
    input.value = ''
  
    inputs['input'] = input
  
    this.setState({
      inputs,
      cities: []
    })
  }
  
  render() {
    return (
      <div onClick={this.clickWeatherHandler.bind(this)} className={'Weather'}>
        <div>
          <div className={'headerDiv'}>
            <div>
              <div className={'inputs'}>
                <Input
                  onChange={event => {this.changeInputHandler(event, 'input')}}
                  value={this.state.inputs.input.value}
                />
                <Input
                  type={this.state.inputs.checkbox.type}
                  label={this.state.inputs.checkbox.label}
                />
              </div>
              {
                this.state.cities.length > 0
                  ? <CitiesList
                      onClick={event => this.clickCityHandler(event)}
                      cities={this.state.cities}
                  />
                  : null
              }
            </div>
          </div>
          <div className={'footerDiv'}>
            {this.renderCitiesCard()}
          </div>
        </div>
      </div>
    )
  }
}