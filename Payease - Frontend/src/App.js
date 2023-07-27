import React from'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Bills from "./pages/Bills"
//componentes
import LoginSignup from "./components/Resgistration/LoginSignup"
import Payment from './pages/Payment';
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/bills' element={<Bills />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/addPayment' element={<Payment />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;