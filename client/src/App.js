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
import { AuthContext } from './contexts/AuthContext';

function App() {
  const [user, setUser] = useState({
    _id: '',
    name: '',
    email: '',
    accessToken: ''
  });

  const login = (authData) => {
    setUser(authData);
  }

  const logout = () => {

  }

  return (
    <AuthContext.Provider value={{user, login}}>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/logout" element={<Logout />} />
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
    </AuthContext.Provider>
  );
}

export default App;
