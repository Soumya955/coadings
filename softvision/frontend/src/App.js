import logo from './logo.svg';
import './App.css';
import AllRoutes from './Pages/AllRoutes';
import UserContextProvider from './ContextProviders/UserContextProvider';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
    <UserContextProvider>
      <Navbar/>    
      <AllRoutes/>
    </UserContextProvider>
    </div>
  );
}

export default App;
