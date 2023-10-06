import "./style/app.css";
import { Products } from "./Components/Products/Products";
import { Header } from "./Design/Header/Header";

function App() {
  return (
    <div className="appContainer">
      <Header />
      <div className="container">
        <Products />
      </div>
    </div>
  );
}

export default App;
