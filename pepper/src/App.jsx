import "antd/dist/antd.css";
import './App.css'
import { Hero } from "./Components/Hero";
import { Navbar } from "./Components/Navbar";

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      {/*Hero Section*/}
      <Hero/>
    </div>
  )
}

export default App
