import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as authService from './services/authService';
import About from './components/About/About';
import CarDetails from './components/Cars/CarDetails/CarDetails';
import Cars from './components/Cars/Cars';
import Contacts from './components/Contacts/Contacts';
import CreateCar from './components/CreateCar/CreateCar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
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

  const onLogout = () => {
    setUserInfo({
      isAuthenticated: false,
      user: null,
    });
  }

  return (
    <div className="App">

      <Header {...userInfo} />

      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/auth/login" element={<Login onLogin={onLogin} />} />
          <Route path="/auth/logout" element={<Logout onLogout={onLogout} />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/mobile/car/all" element={<Cars />} />
          <Route path="/mobile/car/:carId" element={<CarDetails />} />
          <Route path="/mobile/car/create" element={<CreateCar />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/mobile/car/:carId/addTenant" element={<RentACar />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;
