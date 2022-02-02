import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import FunctionalComponent from "./components/FunctionalComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<FunctionalComponent />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
