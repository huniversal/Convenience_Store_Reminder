import express from 'express';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import smtpTransport from '../config/email.js';
import path from 'path';
import ejs from 'ejs';
import { body, validationResult } from 'express-validator';

const router = express.Router();

// 회원가입 라우트
router.post(
    '/register',
    [
        body('email').isEmail().withMessage('유효한 이메일을 입력해주세요.'),
        body('password').isLength({ min: 5 }).withMessage('비밀번호는 최소 5자리 이상이어야 합니다.')
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            console.log('회원가입 요청 데이터:', req.body);

            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: '이미 사용 중인 이메일입니다.' });
            }

            const newUser = new User({ email, password });
            await newUser.save();

            res.status(201).json({ message: '회원가입 성공' });
        } catch (error) {
            console.error('회원가입 오류:', error);
            res.status(500).json({ message: '서버 오류가 발생했습니다.' });
        }
    }
);

// 이메일 인증 라우트
router.post('/send-email', async (req, res) => {
    const { email } = req.body;

    try {
        const authCode = Math.floor(100000 + Math.random() * 900000).toString();

        // 템플릿 렌더링
        const templatePath = path.join(process.cwd(), 'template', 'authMail.ejs'); // 경로를 확인해 주세요
        const html = await ejs.renderFile(templatePath, { authCode });

        const mailOptions = {
            from: process.env.NODEMAILER_USER,
            to: email,
            subject: '회원가입 인증 코드',
            html,
        };

        smtpTransport.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('이메일 전송 오류:', error);
                return res.status(500).json({ message: '이메일 전송 실패' });
            }
            res.status(200).json({ message: '인증 코드 전송 성공', authCode });
        });
    } catch (error) {
        console.error('이메일 인증 오류:', error);
        res.status(500).json({ message: '서버 오류가 발생했습니다.' });
    }
});

// 로그인 라우트 추가
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: '이메일 또는 비밀번호가 잘못되었습니다.' });
        }

        console.log('입력된 비밀번호:', password);
        console.log('저장된 해시:', user.password);

        // 비밀번호 비교
        const isMatch = await user.comparePassword(password);
        console.log('비밀번호 비교 결과:', isMatch);

        if (!isMatch) {
            return res.status(400).json({ message: '이메일 또는 비밀번호가 잘못되었습니다.' });
        }

        // JWT 생성
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        console.error('로그인 오류:', error);
        res.status(500).json({ message: '서버 오류가 발생했습니다.' });
    }
});

export default router;
