const mongoose = require("mongoose");

const uploadSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Upload = mongoose.model("Upload", uploadSchema);

exports.Upload = Upload;
