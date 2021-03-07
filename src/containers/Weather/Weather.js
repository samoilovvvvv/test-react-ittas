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
      inputs: {
        input: {
          value: '',
          type: 'text'
        },
        checkbox: {
          label: 'Автообновление 10с'
        }
      }
    }
  }
  
  changeInputHandler(event) {
    const inputs = {...this.state.inputs}
    const {input} = inputs
  }
  
  render() {
    return (
      <div className={'Weather'}>
        <div>
          <div>
            <Input
              onChange={event => {this.changeInputHandler(event, 'input')}}
            />
            <Input
              type={'checkbox'}
              label={'Автоподнятие Nс'}
            />
          </div>
          <ul>
            <li>asasdasdasdas</li>
          </ul>
        </div>
      </div>
    )
  }
}