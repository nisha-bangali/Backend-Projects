const mongoose = require('mongoose');

const qrSchema = new mongoose.Schema({
  text: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Qr', qrSchema);
