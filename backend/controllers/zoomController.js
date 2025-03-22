// server/controllers/zoomController.js
const { generateZoomLink } = require('../services/zoomService');

exports.generateZoomLink = (req, res) => {
  const zoomLink = generateZoomLink();
  res.json({ zoom_link: zoomLink });
};
