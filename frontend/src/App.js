import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Instructions from './components/Content/Instructions/Instructions';
import Community from './components/Content/Community/Community';
import MyPage from './components/Content/MyPage/MyPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* 처음 접속 시 로그인 화면으로 이동 */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/main/*" element={<MainPageLayout />} />
        </Routes>
      </div>
    </Router>
  );
}

function MainPageLayout() {
  return (
    <div className="main-page-layout">
      <Sidebar className="nav" />
      <div className="content-wrapper">
        <Routes>
          <Route path="" element={<Instructions />} />
          <Route path="community" element={<Community />} />
          <Route path="my" element={<MyPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;