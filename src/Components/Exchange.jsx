import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'
import { Baseurl } from './baseUrl'
import Loader from './Loader'
import './Exchnage.css'
import OurModels from './OurModels'



export default function Exchange() {
  const [Loading, SetLoading] = useState(true)
  const [exchanges, SetExchanges] = useState([])

  useEffect(() => {
    const getExchnagesData = async () => {
      const { data } = await axios.get(`${Baseurl}/exchanges`)
      console.log(data);
      SetExchanges(data)
      SetLoading(false)

    }
    getExchnagesData()
  }, [])

  return (
    <div>
      {
        Loading ? <Loader /> : <>
          <Header />
          <OurModels/>
          <div className='main'>
            {
              exchanges.map((item , i) => {
                return (
                  <div key={i} className="ex-cards container">
                    <div className="image">
                      <img style={{borderRadius:"8px"}} height={"70px"} src={item.image} alt="" />
                    </div>
                    <div className="name">
                      {item.name}
                    </div>
                    <div className="price p-2">
                     {item.trade_volume_24h_btc.toFixed(0)}
                    </div>
                    <div className="rank">
                       {item.trust_score_rank}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </>
      }
    </div>
  )
}
