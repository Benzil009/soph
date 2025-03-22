const express = require('express');
const cors = require('cors');
const path = require('path');
const { initDatabase } = require('./db'); 

// Import API routes
const doctorRoutes = require('./routes/doctors');  // ✅ Ensure the path is correct
const appointmentRoutes = require('./routes/appointments');
const zoomRoutes = require('./routes/zoom');
const timeSlotRoutes = require('./routes/timeSlots');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize database
if (typeof initDatabase === 'function') {
  initDatabase();
} else {
  console.error("Error: initDatabase is not a function. Check db.js exports.");
  process.exit(1);
}

// API routes
app.use('/api/doctors', doctorRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/time_slots', timeSlotRoutes);
app.use('/api/zoom', zoomRoutes);

// Handle undefined routes
app.use((req, res, next) => {
  res.status(404).json({ error: "API route not found" });
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
