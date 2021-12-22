import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext'
import Contacts from './components/Contacts/Contacts';
import About from './components/About/About';
import Cars from './components/Cars/Cars';
import Create from './components/Cars/Create/Create';
import Edit from './components/Cars/Edit/Edit';
import Details from './components/Cars/Details/Details';
import RentACar from './components/Cars/RentACar/RentACar';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';
import { NotificationProvider } from './contexts/NotificationContext';
import Notification from './components/Common/Notification/Notification';
import AdminGuardedRoute from './components/Common/AdminGuardedRoute';
import PrivateRoute from './components/Common/PrivateRoute';
import NotPrivedRoute from './components/Common/NotPrivedRoute';
import SearchAvailable from './components/Cars/SearchAvailable/SearchAvailable';
import AvailableCars from './components/Cars/AvailableCars';

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <div className="App">
          <Header />
          <Notification />
          <main>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/mobile/car/all" element={<Cars />} />
              <Route path="/mobile/car/:carId" element={<Details />} />
              <Route path="/mobile/car/available" element={<SearchAvailable />} />
              <Route path="/mobile/car/availableCars" element={<AvailableCars />} />
              <Route element={<NotPrivedRoute />}>
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/register" element={<Register />} />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route path="/mobile/car/:carId/addTenant" element={<RentACar />} />
                <Route path="/auth/logout" element={<Logout />} />
              </Route>
              <Route element={<AdminGuardedRoute />}>
                <Route path="/mobile/car/create" element={<Create />} />
                <Route path="/mobile/car/:carId/edit" element={<Edit />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
