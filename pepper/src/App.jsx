import "antd/dist/antd.css";
import './App.css'
import { Hero } from "./Components/Hero";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { Product } from "./Pages/Product";

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Product/>
    </div>
  )
}

export default App
