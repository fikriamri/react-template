import React from 'react';
import MainLayout from '../layouts/MainLayout';
import logo from '../assets/img/logo.svg';
import { useSelector } from 'react-redux';
import GoogleBtn from '../components/GoogleBtn';
import Login from '../components/Login';
import Logout from '../components/Logout';

function HomePage() {
  const authReducer = useSelector(state => state.authReducer);
  return (
    <MainLayout>
      <div className="App">
        <header className="App-header">
          {/* <GoogleBtn /> */}
          {authReducer.token ? <Logout /> : <Login />}
          {/* <Login /> */}
          {/* <Logout /> */}
        </header>
      </div>
    </MainLayout>
  );
}

export default HomePage;
