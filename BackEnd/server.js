import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import helmet from 'helmet';
import authRoutes from './routes/auth.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5002;

// CORS 설정 명시적으로 지정
app.use(cors({
  origin: 'http://localhost:3000', // 허용할 출처
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // 허용할 HTTP 메서드
  credentials: true, // 자격 증명(쿠키 등)을 허용
}));

app.use(helmet());
app.use(express.json());

// 기본 라우트 설정
app.get('/', (req, res) => {
  res.send('API is running...');
});

// 라우트 설정
app.use('/api/auth', authRoutes);

// 에러 처리 미들웨어
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
