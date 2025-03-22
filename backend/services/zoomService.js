// server/services/zoomService.js
// This is a simplified mock service
exports.generateZoomLink = () => {
    // In a real implementation, this would call Zoom API to create a meeting
    const meetingId = Math.floor(100000000 + Math.random() * 900000000);
    const password = Math.random().toString(36).slice(2, 8);
    
    return `https://zoom.us/j/${meetingId}?pwd=${password}`;
  };