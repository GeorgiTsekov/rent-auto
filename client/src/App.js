import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as authService from './services/authServcie';
import About from './components/About/About';
import CarDetails from './components/CarDetails/CarDetails';
import Cars from './components/Cars/Cars';
import Contacts from './components/Contacts/Contacts';
import CreateCar from './components/CreateCar/CreateCar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RentACar from './components/RentACar/RentACar';
import Main from './components/Main/Main';

function App() {
  const [userInfo, setUserInfo] = useState({ isAuthenticated: false, email: '' });

  useEffect(() => {
    let user = authService.getUser();

    setUserInfo({
      isAuthenticated: Boolean(user),
      user: user,
    });
  }, []);

  const onLogin = (email) => {
    setUserInfo({
      isAuthenticated: true,
      user: email,
    });
  }

  return (
    <div className="App">

      <Header {...userInfo} />

      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login onLogin={onLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/carDetails" element={<CarDetails />} />
          <Route path="/createCar" element={<CreateCar />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/rentACar" element={<RentACar />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;
