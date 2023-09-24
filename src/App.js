import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import {Home} from "./pages/home/home";

function App() {
  return (
<Router>
<Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
  </Routes>
</Router> 
  );
}

export default App;
