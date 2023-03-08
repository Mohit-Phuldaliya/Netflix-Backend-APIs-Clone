const mongoose = require("mongoose");

const VideoModel = require("../repositories/model/videos");

mongoose.connect(`mongodb://localhost/Netflix_Clone_APIs`, {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

const movieData = [
  {
    media_id: 1,
    location: "the_dark_knight.mp4",
  },
  {
    media_id: 2,
    location: "lord_of_the_rings_01.mp4",
  },
  {
    media_id: 3,
    location: "lord_of_the_rings_02.mp4",
  },
  {
    media_id: 4,
    location: "lord_of_the_rings_03.mp4",
  },
  {
    media_id: 5,
    location: "dark.mp4 ",
  },
  {
    media_id: 6,
    location: "suits.mp4 ",
  },
];

async function seedMovies() {
  try {
    await VideoModel.collection.drop();
  } catch (ex) {
    console.log(ex.message);
  }
  await VideoModel.insertMany(movieData);
  mongoose.connection.close();
}

seedMovies();

module.exports = db;
