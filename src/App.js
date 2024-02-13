import React from 'react'
import Header from './Components/Header'
import { BrowserRouter,Routes , Route } from 'react-router-dom'
import Exchange from './Components/Exchange'
import Coins from './Components/Coins'
import CoinDetais from './Components/CoinDetais'

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Exchange/>}>  </Route>
           <Route path='/coins' element={<Coins/>}>  </Route>
           <Route path='/coins/:id' element={<CoinDetais/>}>  </Route>

        </Routes>
      </BrowserRouter>
  )
}
