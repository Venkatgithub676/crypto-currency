// Write your code here

import {Component} from 'react'
import './index.css'
import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {isLoading: true}

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const res = await response.json()
    const data = res.map(each => ({
      currencyName: each.currency_name,
      currencyLogo: each.currency_logo,
      id: each.id,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
    }))
    this.setState({data})
  }

  render() {
    const {data} = this.state
    return (
      <div className="crypto-tracker-con">
        <CryptocurrenciesList data={data} />
      </div>
    )
  }
}

export default CryptocurrencyTracker
