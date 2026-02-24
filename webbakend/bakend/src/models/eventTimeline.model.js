const mongoose = require('mongoose');

const EventTimelineSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('EventTimeline', EventTimelineSchema);
