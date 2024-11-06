import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./style/LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5002/api/auth/login', {
        email,
        password,
      });
      if (response.status === 200) {
        alert('로그인 성공!');
        navigate('/main');
      }  
    } catch (error) {  
      console.error('로그인 오류:', error.response?.data);
      alert('로그인 실패. 이메일 또는 비밀번호를 확인하세요.'); 
    } 
  }; 

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <h1>편의점 알리미</h1>
      <form onSubmit={handleLogin}>
        <div className="input-container">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="아이디"
            required
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            required
          />
        </div>
        <button type="submit" className="login-button">로그인</button>
      </form>
      <div className="additional-links">
        <a href="#">비밀번호 재설정</a> | <a onClick={handleRegisterClick}>회원가입</a>
      </div>
    </div>
  );
  
};

export default LoginPage;