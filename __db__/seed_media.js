const mongoose = require("mongoose");

const MediaModel = require("../repositories/model/media");

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
    _id: 1,
    name: "The Dark Knight",
    release_date: "06/23/2008",
    genre: "Action",
    rating: 9.0,
    view_count: 5000,
  },
  {
    _id: 2,
    name: "Lord of the rings: Felloship of the rind",
    release_date: "06/23/2001",
    genre: "Fantasy",
    rating: 8.5,
    view_count: 4200,
  },
  {
    _id: 3,
    name: "Lord of the rings: Two Towers",
    release_date: "08/23/2002",
    genre: "Fantasy",
    rating: 8.2,
    view_count: 4800,
  },
  {
    _id: 4,
    name: "Lord of the rings: Return of the king",
    release_date: "12/23/2003",
    genre: "Fantasy",
    rating: 9.0,
    view_count: 5400,
  },
  {
    _id: 5,
    name: "Dark",
    release_date: "06/27/2018",
    genre: "Mystery",
    rating: 8.5,
    view_count: 2000,
  },
  {
    _id: 6,
    name: "Suits",
    release_date: "06/12/208",
    genre: "Drama",
    rating: 8.2,
    view_count: 5800,
  },
];

async function seedMovies() {
  try {
    await MediaModel.collection.drop(); // if the data base already exust then i delete it
  } catch (ex) {
    console.log(ex.message);
  }
  await MediaModel.insertMany(movieData); // and insert all data that we define
  mongoose.connection.close();
}

seedMovies();

module.exports = db;
