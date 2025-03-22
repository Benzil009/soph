// server/routes/zoom.js
const express = require('express');
const router = express.Router();
const { generateZoomLink } = require('../controllers/zoomController');

router.get('/generate', generateZoomLink);

module.exports = router;

