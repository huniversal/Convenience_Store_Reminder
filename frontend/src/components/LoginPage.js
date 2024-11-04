import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
      <h2>로그인 페이지</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>이메일 (아이디로 사용)</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">로그인</button>
      </form>
      <button onClick={handleRegisterClick}>회원가입</button>
    </div>
  );
};

export default LoginPage;