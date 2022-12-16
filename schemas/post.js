const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  user: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});


module.exports = mongoose.model("Posts", postSchema)