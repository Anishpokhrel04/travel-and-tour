import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar"
import Offer from "./Components/Offer/offer";
import Popular from "./Components/Popular/Popular";
import './app.css';
function App() {
  

  return (
    <>
      <Navbar/>
      <Home/>
      <Popular/>
      <Offer/>
    </>
  )
}

export default App
