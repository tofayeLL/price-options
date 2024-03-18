
import './App.css'
import LineChart from './components/LineChart/LineChart'


import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {


  return (
    <>
     <div className='container mx-auto px-14'>


     <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>





     </div>





    </>
  )
}

export default App
