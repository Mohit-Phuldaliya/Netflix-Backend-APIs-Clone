const mongoose = require("mongoose");

const VideosSchema = new mongoose.Schema({
  media_id: Number,
  location: String,
});

const VideoModel = mongoose.model("Videos", VideosSchema);

module.exports = VideoModel;
