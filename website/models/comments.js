const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  comment: { type: String, required: false },
  date: { type: Date, default: Date.now }
});

const Comments = mongoose.model("Comments", commentsSchema);

module.exports = Comments;
