import { useCallback, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import MainNavigation from './components/navigation/MainNavigation';
import Welcome from './pages/Welcome';
import Auth from './pages/Auth';
import UsersPlants from './pages/UsersPlants';
import NewPlant from './pages/NewPlant';
import { AuthContext } from './context/auth-context';
import { CalendarContext } from './context/calendar-context';
import UpdatePlant from './pages/UpdatePlant';
import Canlendar from './pages/Calendar';

import './App.css';

function App() {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [eventType, setEventType] = useState([]);

  let routes;

  const login = useCallback(
    (dataEmail, dataPassword) => {
      setEmail(dataEmail);
      setPassword(dataPassword);
      setIsLoggedIn(true);

      localStorage.setItem(
        'userData',
        JSON.stringify({
          email: email,
          password: password,
        })
      );
    },
    [email, password]
  );

  const logout = useCallback(() => {
    setEmail(null);
    setPassword(null);
    setIsLoggedIn(false);
    localStorage.removeItem('userData');
  }, []);

  const addEvent =  useCallback(eventType => {
   setEventType(prev => [...prev, eventType]);
  }, []);

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path='/' element={<Welcome />}></Route>
        <Route path='/plants' element={<UsersPlants />}></Route>;
        <Route path='/plants/new' element={<NewPlant />}></Route>;
        <Route path='/plants/:plantId' element={<UpdatePlant />}></Route>;
        <Route path='/plants/calendar' element={<Canlendar />}></Route>
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path='/' element={<Welcome />}></Route>
        <Route path='/auth' element={<Auth />}></Route>
        <Route path='/plants' element={<Navigate to='/auth' />}></Route>
        <Route path='/plants/new' element={<Navigate to='/auth' />}></Route>
        <Route
          path='/plants/calendar'
          element={<Navigate to='/auth' />}
        ></Route>
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!email && !!password,
        email: email,
        password: password,
        login: login,
        logout: logout,
      }}
    >
      <CalendarContext.Provider
        value={{ events: eventType, addEvent: addEvent }}
      >
        <Router>
          <MainNavigation />
          <main>{routes}</main>
        </Router>
      </CalendarContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
