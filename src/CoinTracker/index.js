import React, { useEffect, useState } from 'react'

const CoinTracker = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  /* coin api */
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then(respose => respose.json())
      .then(json => {
        setCoins(json)
        setLoading(false)
      });
  }, [])
  return (
    <div>
      <h1>The Coins! {loading ? '' : `(${coins.length})`} </h1>
      {loading ? <strong>Loading...</strong> : <select>
        {coins.map((coin) => <option key={coin.id}>{coin.name}({coin.symbol}) : ${coin.quotes.USD.price} USD</option>)}
      </select>}
    </div>
  )
}

export default CoinTracker;