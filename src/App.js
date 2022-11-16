import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainNavigation from './components/navigation/MainNavigation';
import Welcome from './pages/Welcome';
import Auth from './pages/Auth';
import UsersPlants from './pages/UsersPlants';

import './App.css';

function App() {
  const content = (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path='/' element={<Welcome />}></Route>
          <Route path='/auth' element={<Auth />}></Route>
          <Route path='/:userId/plants' element={<UsersPlants />}></Route>
        </Routes>
      </main>
    </Router>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
}

export default App;
