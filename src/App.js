import logo from "./logo.svg";
import "./App.css";
import Cars from "./Cars";
import { Route, Routes } from "react-router-dom";
import CarSales from "./CarSales";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Cars />} />
        <Route path="/car-sales/:id" element={<CarSales />} />
      </Routes>
    </div>
  );
}

export default App;
