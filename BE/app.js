import express from 'express';
import mongoose from 'mongoose';
import petRoutes from './routes/petRoutes.js';
import cors from 'cors';
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.use('/pets', petRoutes);


const MONGO_URI = process.env.MONGODB_URI;
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

export default app;
