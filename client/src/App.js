import { Routes, Route } from 'react-router-dom';

import About from './components/About/About';
import Details from './components/Cars/Details/Details';
import Cars from './components/Cars/Cars';
import Contacts from './components/Contacts/Contacts';
import CreateCar from './components/Cars/Create/Create';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';
import RentACar from './components/RentACar/RentACar';
import Main from './components/Main/Main';
import { AuthContext } from './contexts/AuthContext';
import useLocalStorage from './hooks/useLocalStorage';

const initialAuthState = {
  _id: '',
  name: '',
  email: '',
  accessToken: ''
};

function App() {
  const [user, setUser] = useLocalStorage('user', initialAuthState);

  const login = (authData) => {
    setUser(authData);
  };

  const logout = () => {
    setUser(initialAuthState);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/logout" element={<Logout />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/mobile/car/all" element={<Cars />} />
            <Route path="/mobile/car/:carId" element={<Details />} />
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
