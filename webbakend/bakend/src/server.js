console.log("Starting server.js...");

process.on('uncaughtException', function (err) {
  console.error('Uncaught Exception:', err);
});
process.on('unhandledRejection', function (err) {
  console.error('Unhandled Rejection:', err);
});

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');

const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '1mb' }));

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey'; // Change this in production

// Rate limiting for auth and write endpoints
const authLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 20 });

// In-memory data stores
let adminUser = { username: process.env.ADMIN_USER || 'admin', passwordHash: bcrypt.hashSync(process.env.ADMIN_PASS || 'admin123', 8) };
// Contact Us and Honours removed
let eventTimelines = [
  { _id: '1', title: 'Basketball Finals', date: '2025-09-01', time: '15:30', description: 'Final match', imageUrl: '' },
  { _id: '2024-07-25-1', title: 'GECJ Football Championship Final', date: '2024-07-25', time: '14:00', description: 'Lions vs Tigers at GECJ Stadium', imageUrl: 'https://images.unsplash.com/photo-1521417531039-96c94a58689d?auto=format&fit=crop&w=800&q=70' },
  { _id: '2024-07-25-2', title: 'GECJ Basketball Exhibition Match', date: '2024-07-25', time: '17:30', description: 'Eagles vs Hawks at GECJ Arena', imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=70' },
  { _id: '2024-07-26-1', title: 'GECJ Tennis Tournament - Semifinals', date: '2024-07-26', time: '10:00', description: 'Players TBD at GECJ Tennis Courts', imageUrl: 'https://images.unsplash.com/photo-1542144612-1c7b03b42a1c?auto=format&fit=crop&w=800&q=70' }
];

// In-memory Discover the Council cards
// { _id, name, role, email?, phone?, imageUrl?, bio?, order? }
let councilCards = [
  { _id: 'c-1', name: 'deepraj', role: 'General Coordinator', email: 'deepraj@sports.gecj.edu', phone: '+91 0987654321', imageUrl: '', bio: 'Leads the council.', order: 1 },
  { _id: 'c-2', name: 'devanshi jain', role: 'Oraniser', email: 'devanshi@sports.gecj.edu', phone: '+91 1234567890', imageUrl: '', bio: 'Coordinates events.', order: 2 }
];

// In-memory Latest News & Updates
// { _id, title, date?, desc?, imageUrl?, order? }
let newsItems = [
  { _id: 'n-1', title: 'Welcome to GECJ Sports Hub', date: '2025-08-01', desc: 'All your sports updates in one place.', imageUrl: '', order: 1 },
  { _id: 'n-2', title: 'Tryouts this Weekend', date: '2025-08-05', desc: 'Join tryouts for various teams.', imageUrl: '', order: 2 }
];

// Middleware to check JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
}

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running!', time: new Date().toISOString() });
});

// Admin login
app.post('/api/admin/login', authLimiter, (req, res) => {
  const { username, password } = req.body;
  if (username !== adminUser.username || !bcrypt.compareSync(password, adminUser.passwordHash)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '2h' });
  res.json({ token });
});



// Event Timeline CRUD
app.get('/api/event-timelines', (req, res) => {
  res.json(eventTimelines);
});
app.post('/api/event-timelines', authenticateToken, (req, res) => {
  const newTimeline = { _id: String(Date.now()), ...req.body };
  eventTimelines.push(newTimeline);
  res.json(newTimeline);
});
app.put('/api/event-timelines/:id', authenticateToken, (req, res) => {
  const idx = eventTimelines.findIndex(e => e._id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: 'Not found' });
  eventTimelines[idx] = { ...eventTimelines[idx], ...req.body };
  res.json(eventTimelines[idx]);
});
app.delete('/api/event-timelines/:id', authenticateToken, (req, res) => {
  eventTimelines = eventTimelines.filter(e => e._id !== req.params.id);
  res.json({ message: 'Deleted' });
});

// Council Cards CRUD
app.get('/api/council-cards', (req, res) => {
  const sorted = [...councilCards].sort((a, b) => (a.order || 0) - (b.order || 0));
  res.json(sorted);
});
app.post('/api/council-cards', authenticateToken, (req, res) => {
  const { name, role, email, phone, imageUrl, bio, order, instagramUrl, linkedinUrl } = req.body || {};
  if (!name || !role) return res.status(400).json({ message: 'name and role are required' });
  const newCard = { _id: 'c-' + Date.now(), name: String(name).trim(), role: String(role).trim(), email, phone, imageUrl, bio, order: Number(order) || 0, instagramUrl, linkedinUrl };
  councilCards.push(newCard);
  res.json(newCard);
});
app.put('/api/council-cards/:id', authenticateToken, (req, res) => {
  const idx = councilCards.findIndex(c => c._id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: 'Not found' });
  councilCards[idx] = { ...councilCards[idx], ...req.body };
  res.json(councilCards[idx]);
});
app.delete('/api/council-cards/:id', authenticateToken, (req, res) => {
  councilCards = councilCards.filter(c => c._id !== req.params.id);
  res.json({ message: 'Deleted' });
});

// Latest News & Updates CRUD
app.get('/api/news', (req, res) => {
  const sorted = [...newsItems].sort((a, b) => (a.order || 0) - (b.order || 0));
  res.json(sorted);
});
app.post('/api/news', authenticateToken, (req, res) => {
  const { title, date, desc, imageUrl, order } = req.body || {};
  if (!title) return res.status(400).json({ message: 'title is required' });
  const item = { _id: 'n-' + Date.now(), title: String(title).trim(), date: date || '', desc: desc || '', imageUrl: imageUrl || '', order: Number(order) || 0 };
  newsItems.push(item);
  res.json(item);
});
app.put('/api/news/:id', authenticateToken, (req, res) => {
  const idx = newsItems.findIndex(n => n._id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: 'Not found' });
  newsItems[idx] = { ...newsItems[idx], ...req.body };
  res.json(newsItems[idx]);
});
app.delete('/api/news/:id', authenticateToken, (req, res) => {
  newsItems = newsItems.filter(n => n._id !== req.params.id);
  res.json({ message: 'Deleted' });
});

// Optional: connect MongoDB if MONGO_URI is provided
const MONGO_URI = process.env.MONGO_URI;
if (MONGO_URI) {
  mongoose.connect(MONGO_URI).then(() => {
    console.log('MongoDB connected');
  }).catch(err => {
    console.error('MongoDB connection error:', err.message);
  });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));