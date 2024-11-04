// import mongoose from "mongoose";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import moment from "moment";

// const saltRounds = 10;

// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   authCode: {
//     type: String,
//     trim: true,
//   },
//   nickname: {
//     type: String,
//     maxlength: 50,
//   },
//   role: {
//     type: Number,
//     default: 0,
//   },
//   image: {
//     type: String,
//     default: null,
//   },
//   statusCode: {
//     type: Number,
//   },
//   accessToken: {
//     type: String,
//   },
//   refreshToken: {
//     type: String,
//   },
//   tokenExp: {
//     type: Number,
//   },
// });

// // 비밀번호 해싱 로직
// userSchema.pre("save", function (next) {
//   const user = this;

//   if (user.isModified("password")) {
//     const salt = bcrypt.genSaltSync(saltRounds);
//     user.password = bcrypt.hashSync(user.password, salt);
//     next();
//   } else {
//     next();
//   }
// });

// // JWT 토큰 생성 메서드
// userSchema.methods.generateToken = function () {
//   const user = this;
//   const token = jwt.sign({ _id: user._id.toHexString() }, process.env.JWT_SECRET, {
//     expiresIn: "1h",
//   });
//   user.accessToken = token;
//   return user.save().then(() => token);
// };

// // 인증 코드 검증 메서드
// userSchema.methods.verifyAuthCode = function (authCode) {
//   return this.authCode === authCode;
// };

// const User = mongoose.model("User", userSchema);

// export default User;


import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  authCode: {
    type: String,
    trim: true,
  },
  nickname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    default: null,
  },
  statusCode: {
    type: Number,
  },
  accessToken: {
    type: String,
  },
  refreshToken: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
