const mongoose = require('mongoose');

const NewsItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    date: { type: String },
    desc: { type: String },
    imageUrl: { type: String },
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

module.exports = mongoose.model('NewsItem', NewsItemSchema);
