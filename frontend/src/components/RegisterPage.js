import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./style/RegisterPage.css"

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [enteredAuthCode, setEnteredAuthCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [authCodeStatus, setAuthCodeStatus] = useState('');
  const [passwordMatchStatus, setPasswordMatchStatus] = useState('');
  const [countdown, setCountdown] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (countdown > 0) {              
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);        
  }, [countdown]);

  const handleEmailVerification = async (e) => {
    e.preventDefault();
    if (countdown > 0) {
      alert('재인증은 60초 후에 가능합니다.');
      return;
    }
    try {
      // 이메일로 인증 코드 전송 요청
      const response = await axios.post('http://localhost:5002/api/auth/send-email', {
        email: email.trim(),
      });
      if (response.status === 200) {
        setAuthCode(response.data.authCode);
        alert('인증 코드가 이메일로 전송되었습니다.');
        setCountdown(60); // 60초 카운트다운 시작
      }
    } catch (error) {
      console.error('인증 코드 전송 오류:', error.response?.data);
      alert('인증 코드 전송 실패.');
    }
  };

  const handleAuthCodeVerificationButton = () => {
    if (enteredAuthCode === authCode) {
      setAuthCodeStatus('valid');
      setIsVerified(true);
      alert('인증 성공!');
    } else {
      setAuthCodeStatus('invalid');
      alert('인증 실패. 인증번호를 확인해주세요.');
    }
  };

  const handleAuthCodeVerification = (e) => {
    setEnteredAuthCode(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    if (!isVerified) {
      alert('이메일 인증이 필요합니다.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5002/api/auth/register', {
        email: email.trim(),
        password: password.trim(),
      });
      if (response.status === 201) {
        alert('회원가입 성공!');
        navigate('/');
      }
    } catch (error) {
      console.error('회원가입 오류:', error.response?.data);
      if (error.response && error.response.data && error.response.data.errors) {
        // express-validator에서 발생한 유효성 검사 오류 메시지 처리
        alert(error.response.data.errors.map(err => err.msg).join('\n'));
      } else {
        alert('회원가입 실패.');
      }
    }
  };

  const handleLoginClick = () => {
    navigate('/');
  };

  return (
    <div className="register-container">
      <h2 className="title">회원가입</h2>
      <form onSubmit={handleRegister}>
        <div className="input-group">
          <label>이메일</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일"
            required
          />
          <button type="button" className ="email-button" onClick={handleEmailVerification} disabled={countdown > 0}>이메일 인증하기</button>
        </div>
        <div className="input-group">
          <label>인증번호 입력</label>
          <input
            type="text"
            value={enteredAuthCode}
            onChange={(e) => setEnteredAuthCode(e.target.value)}
            placeholder="인증번호"
            required
          />
          <button type='certification-button' className='certification-button' onClick={handleAuthCodeVerificationButton}>
            인증번호
          </button>
        </div>
        <div className="input-group">
          <label>비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            required
          />
        </div>
        <div className="input-group">
          <label>비밀번호 확인</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="비밀번호 확인"
            required
          />
        </div>
        <button type="submit" className="submit-button">회원가입하기</button>
      </form>
      <div className="footer">
        <p>이미 아이디가 있으신가요?</p>
        <button className="footer-button" onClick={handleLoginClick}>로그인</button>
      </div>
    </div>
  );
};

export default RegisterPage;
