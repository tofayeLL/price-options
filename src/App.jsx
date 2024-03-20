
import './App.css'
import LineChart from './components/LineChart/LineChart'


import NavBar from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {


  return (
    <>
     <div className='container mx-auto px-14'>


     <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>





     </div>





    </>
  )
}

export default App
