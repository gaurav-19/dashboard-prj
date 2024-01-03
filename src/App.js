import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import PrivateRoutes from './components/routes/PrivateRoutes';
import PublicRoutes from './components/routes/PublicRoutes';
import AppContext from './components/common/AppContext';
import AuthService from './services/AuthService';

function App() {
  const [currentuser, setcurrentuser] = useState(AuthService.getCurrentUser());
  const userSettings = {
    currentuser: currentuser,
    setcurrentuser : setcurrentuser
  };

  return (
    <AppContext.Provider value={userSettings}>
      <BrowserRouter>
      {currentuser ? <PrivateRoutes/> : <PublicRoutes/>}
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
