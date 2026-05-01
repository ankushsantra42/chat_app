require("dotenv").config();

const ENV = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET_KEY,
  NODE_ENV: process.env.NODE_ENV,
  CLIENT_URL: process.env.CLIENT_URL,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  EMAIL_FROM: process.env.EMAIL_FROM,
  EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME,
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  ARCJET_KEY: process.env.ARCJET_KEY,
  ARCJET_ENV: process.env.ARCJET_ENV,
};

module.exports = { ENV }


// CORS_ORIGIN=http://localhost:5173
// PORT=4000
// # CLIENT_URL=http://localhost:5173/
// mongoDB_password=338qx2R5VNB99yRV
// MONGODB_URI=mongodb+srv://ankushsantra42_db_user:338qx2R5VNB99yRV@cluster0.w5hj1s1.mongodb.net/chat_app
// #mongodb+srv://ankushsantra42_db_user:338qx2R5VNB99yRV@cluster0.w5hj1s1.mongodb.net/

// JWT_SECRET_KEY=03e324731dfa9583499a59fe123a381989769e51c86025e26ecd7c95447304b3
// NODE_ENV=development

// RESEND_API_KEY=re_Rhi5AYk5_Go7FKDLJurdPjr6b2ym4FQj6
// EMAIL_FROM="onboarding@resend.dev"
// EMAIL_FROM_NAME="ANKUSH SANTRA"
// CLIENT_URL=http://localhost:5173
// CLOUDINARY_CLOUD_NAME = dghmzfvic
// CLOUDINARY_API_KEY = 575782162992289
// CLOUDINARY_API_SECRET = Ji6RpsGry323qBxvc3KG7WjYLQE

// ARCJET_KEY = ajkey_01kq5ja3ysft78hnjcym7575ph
// ARCJET_ENV = development
