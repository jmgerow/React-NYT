const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: false },
  date: { type: String, required: false },
  url: { type: String, required: false },
  saved: {type: Boolean, default: false}
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
