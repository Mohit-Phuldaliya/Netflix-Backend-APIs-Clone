const Media = require("../model/media");

const findBy = async (param, term = "") => {
  // passing "gi" means search the entire length of the data and find anywhere if it's dark
  const expression = new RegExp(term, "gi"); // creating regular expression means even if my movie name is "darkeness beyond" it still containes the word dark
  try {
    return await Media.find({ [param]: expression });
  } catch (err) {
    return null;
  }
};

const getTop = async (by, limit) => {
  try {
    return await Media.find({}).sort(`-${by}`).limit(limit);
  } catch (err) {
    return null;
  }
};

module.exports = {
  findBy,
  getTop,
};
