import ReactDOM from 'react-dom';

import MainNavigation from './components/navigation/MainNavigation';

import './App.css';

function App() {
  const content = (
    <main>
      <MainNavigation />
    </main>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
}

export default App;
