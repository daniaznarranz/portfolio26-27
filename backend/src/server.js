import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { readFileSync } from 'fs';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Load projects from JSON
const projects = JSON.parse(
  readFileSync(new URL('./projects.json', import.meta.url))
);

// Routes
app.get('/api/status', (req, res) => {
  res.json({
    status: 'online',
    message: 'Portfolio Backend API is running smoothly',
    timestamp: new Date()
  });
});

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
