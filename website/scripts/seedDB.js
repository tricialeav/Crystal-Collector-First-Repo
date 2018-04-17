const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/comments",
  {
    useMongoClient: true
  }
);

const comments = [
  {
    name: "Example",
    email: "example@example.com",
    comment:
      "This is a text comment",
    date: new Date(Date.now())
  }
];

db.Comment
  // .remove({})
  .then(() => db.Comment.comments.insertOne(comments))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
