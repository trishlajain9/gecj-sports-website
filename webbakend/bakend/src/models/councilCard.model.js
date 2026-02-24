const mongoose = require('mongoose');

const CouncilCardSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    email: { type: String, trim: true },
    phone: { type: String, trim: true },
    imageUrl: { type: String, trim: true },
    bio: { type: String, trim: true },
    order: { type: Number, default: 0 },
    instagramUrl: { type: String, trim: true },
    linkedinUrl: { type: String, trim: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('CouncilCard', CouncilCardSchema);
