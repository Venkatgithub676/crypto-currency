// Write your JS code here

import './index.css'

const CryptocurrenciesList = props => {
  const {data} = props
  return (
    <div className="crypto-currencies-list-con">
      <h1 className="crypto-currencies-list-heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
        alt="cryptocurrency"
        className="crypto-currencies-list-img"
      />
    </div>
  )
}

export default CryptocurrenciesList
