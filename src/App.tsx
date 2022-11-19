import React from 'react';
import './App.css';
import {
  Route,
  Routes
} from 'react-router-dom';
import { HomeLayout } from './layouts/HomeLayout';
import { ProtectedLayout } from './layouts/ProtectedLayout';
import Dashboard from './pages/dashboard/Dashboard';
import SettingsPage from './pages/settings/Index';
import { SignInSide } from './pages/signIn/SignIn';

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        {/*<Route path="/" element={<HomePage />} />*/}
        <Route path="/login" element={<SignInSide />} />
      </Route>

      <Route path="/" element={<ProtectedLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
    // <div className="App">
    //   <SignInSide />
    // </div>
  );
}

export default App;
