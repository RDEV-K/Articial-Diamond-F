import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { AuthProvider } from './Context/AuthContext';
// import PrivateRoute from './Routes/PrivateRoute';
// import ProtectedRoute from './Routes/ProtectedRoute';
// import Home from './Component/Home';
// import Login from './Component/Login';
// import Dashboard from './Component/Dashboard';

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Diamond from './Pages/Diamond';
import { getConstantData, getUserResponse } from './APIs/api';
import NeedHelpComponent from "./Pages/NeedHelpComponent";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsConditions from "./Pages/TermsCondition";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Subscription from "./Pages/Subscriprion";
import ProfilePage from "./Pages/ProfilePage";
import CreateDiamond from "./Pages/createDiamond";
import {ConfigProvider} from "antd";

function App() {
  const [userData, setUserData] = useState({});
  console.log(userData)

  const fetchConstantData = async () => {
    await getConstantData().then((response) => {
      localStorage.setItem('constantData', JSON.stringify(response));
    }).catch((e) => {
      console.log(e)
    })
  }

  useEffect(() => {
    fetchConstantData();
  }, [])

  let allParams = window.location.search;
  const params = new URLSearchParams(allParams);
  const code = params.get('code');

  const fetchUserResponse = async () => {
    if(code) {
      await getUserResponse(allParams).then((response) => {
        localStorage.setItem('token', response?.data?.token)
        localStorage.setItem('userData', JSON.stringify(response?.data?.user?.dataValues))
        setUserData(response?.data?.user?.dataValues)
      }).catch((e) => {
        console.log(e)
      })
    }
  }

  useEffect(() => {
    fetchUserResponse();
  }, [allParams])

  // const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <div className='App'>
      <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#C59476',
            },
          }}
      >
        <Router>
          <Routes>
            {/* <Route path="/" element={<Navigate to="/search" />} /> */}
            <Route path="/search" element={<Diamond />} />
            <Route path="/" element={<Navigate to="/search" replace />} />
            {/* <Route path="/search" element={isAuthenticated ? <Diamond /> : <Navigate to="/login" />} /> */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/need-help" element={<NeedHelpComponent />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/subscription-plan" element={<Subscription />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="/create-diamond" element={<CreateDiamond />} />
          </Routes>
        </Router>
      </ConfigProvider>
    </div>
  );
}

export default App;
