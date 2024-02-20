
import './App.css';
import {
  Routes,
  Route
          } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from './components/Navbar';
import Meals from "./pages/Meals";
import Zileke from './pages/Zileke';
import Socials from './pages/Socials';




function App() {
  return (
      <>
        <Navbar/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/meals' element={<Meals/>}/>
            <Route path='/zileke' element={<Zileke/>}/>
            <Route path='/socials' element={<Socials/>}/>
          </Routes>
        </div>
      </>
    );
}

export default App;