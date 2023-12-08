import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Pages/AllRoutes";
import HomeProducts from "./Pages/HomeProducts";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

function App() {



  return (
    <div className="App">
    <NavBar/>
    <AllRoutes/>
    <Footer/>
    {/* <HomeProducts/> */}
    </div>
  );
}

export default App;
