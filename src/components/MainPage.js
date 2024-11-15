import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Instructions from './components/Content/Instructions/Instructions';
import Community from './components/Content/Community/Community';
import MyPage from './components/Content/MyPage/MyPage';
import Header from './components/Layout/Header';
import ChangeTheme from './components/ChangeTheme';
import './MainPageLayout.css';

function MainPageLayout() {
  return (
    <div className="main-page-layout">
      <Header />
      <ChangeTheme /> {/* 테마 변경 버튼을 헤더 아래에 추가 */}
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

export default MainPageLayout;