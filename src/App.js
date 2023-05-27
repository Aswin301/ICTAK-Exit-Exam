import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Otp from './components/Otp'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/"  element={<Login/>}/>
     <Route path="/otp"  element={<Otp/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
