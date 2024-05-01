
import './App.css'
import DaisyNav from './Components/DaisyNavbar/DaisyNav'
import LineCharts from './Components/LineCharts/LineCharts'
import Navbar from './Components/Navbar/Navbar'
import Phones from './Components/Phones/Phones'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
  <Navbar></Navbar>
    <DaisyNav></DaisyNav> 
 <PriceOptions></PriceOptions>
      <LineCharts></LineCharts>
      <br />
      <Phones></Phones>
    </>
  )
}

export default App
