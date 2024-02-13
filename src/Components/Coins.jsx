import React, { useEffect, useState } from 'react'
import { Baseurl } from './baseUrl'
import Loader from './Loader'
import axios from 'axios'
import Header from './Header'
// import './Exchnage.css'
import './res.css'
import { Link } from 'react-router-dom'

export default function Coins() {
  const [Loading, SetLoading] = useState(true)
  const [coins, SetCoins] = useState([])
  const [currency, setCurrency] = useState('usd')
  const [search ,setSearch]=useState('')
  const currencySymbol = currency === 'inr' ? '₹' : '$'

  useEffect(() => {
    const getCoinsData = async () => {
      const { data } = await axios.get(`${Baseurl}/coins/markets?vs_currency=${currency}`)
      console.log(data);
      SetCoins(data)
      SetLoading(false)

    }
    getCoinsData()
  }, [])

  return (
    <>
      {
        Loading ? <Loader /> : <>
          <Header />
          <div className="search-bar">
             <input type="text" placeholder='Find Your Coin'
              
             onChange={(e)=>setSearch(e.target.value)}
             />
          </div>
          <div className="btns">
            <button onClick={() => setCurrency('inr')}>inr</button>
            <button onClick={() => setCurrency('usd')}>usd</button>
          </div>
          {
            coins.filter((data)=>{
              if(data == ''){
               return data
              } else if(data.name.toLowerCase().includes(search.toLowerCase())){
                  return data
              }
           }).map((coinsdata, i) => {
              return (
                <CoinCard coinsdata={coinsdata} id={coinsdata.id} i={i} currencySymbol={currencySymbol} />
              )
            })
          }

        </>
      }
    </>
  )
}
const CoinCard = ({ coinsdata, i, currencySymbol,id }) => {
  const profit = coinsdata.price_change_percentage_24h > 0
  return (
    <Link to={`/coins/${id}`} style={{ color: "white", textDecoration: "none" }}>

      <div key={i} className="ex-cards">
        <div className="image">
          <img height={"80px"} src={coinsdata.image} alt="" />
        </div>
        <div className="name">
          {coinsdata.name}
        </div>
        <div className="price">
          {currencySymbol} {coinsdata.current_price.toFixed(0)}
        </div>
        <div style={profit ? { color: "green" } : { color: "red" }} className="rank">
          {profit ? "+" + coinsdata.price_change_percentage_24h.toFixed(3) : coinsdata.price_change_percentage_24h.toFixed(3)}
        </div>
      </div>

    </Link>

  )
}