import React , {Component} from 'react'
import Layout from './hoc/Layout/Layout'
import Weather from '../src/containers/Weather/Weather'

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Weather/>
      </Layout>
    )
  }
}