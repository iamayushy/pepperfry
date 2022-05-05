import "antd/dist/antd.css";
import './App.css'
import { ProductC } from "./Common/ProductC";
import { Hero } from "./Components/Hero";
import { Navbar } from "./Components/Navbar";
import { Array } from "./Pages/Array";
import { Home } from "./Pages/Home";
import { Product } from "./Pages/Product";

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      {/* <Home/>
      <Product/> */}
      <Array/>

    </div>
  )
}

export default App
