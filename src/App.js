import React, { useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from    './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Instructions from './components/Content/Instructions/Instructions';
import Community from    './components/Content/Community/Community';
import MyPage from       './components/Content/MyPage/MyPage';
import Header from       './components/Layout/Header';
import { ThemeProvider } from './components/Content/MyPage/ThemeContext';
import './App.css';


function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="app-container">
          <Routes>
            {/* 처음 접속 시 로그인 화면으로 이동 */}
            <Route path="/"         element={<Navigate to="/login" />} />
            <Route path="/login"    element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/main/*"   element={<MainPageLayout />} />
          </Routes>
        </div>
      </ThemeProvider>

    </Router>
  );
}

function MainPageLayout() {
  useEffect(() => {
    // 헤더 높이를 가져와서 콘텐츠 시작 위치 설정
    const headerElement = document.querySelector('.header');
    const contentWrapper = document.querySelector('.content-wrapper');

    if (headerElement && contentWrapper) {
      const headerHeight = headerElement.offsetHeight;
      contentWrapper.style.paddingTop = `${headerHeight + 20}px`; // 헤더 높이 + 여백 추가
    }
  }, []);

  return (
    <div className="content"> 
    {/* 컨텐츠 메인 박스 */}
      <Header className="nav" />
        <div className='content-wrapper'>
          <Routes>
            <Route path=""          element={<Instructions />} />
            <Route path="community" element={<Community />} />
            <Route path="my"        element={<MyPage />} />
          </Routes>          
        </div>
    </div>
  );
}                         

{/* <div className="main-page-layout"> */}

export default App;
