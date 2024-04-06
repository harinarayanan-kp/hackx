import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dasboard from "./components/Dasboard";
import Signin from "./components/Signin";
import Register from "./components/Register";
import Inventory from "./components/Inventory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<div>Home</div>}></Route>
        <Route path="/dashboard" element={<Dasboard />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
