const express = require("express");
const app = express();
const { cloudinary } = require("./cloudinary");
const { connectDB } = require("./frontend/config/connectDb");
const { Upload } = require("./models/uploadModel");

connectDB();

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ limit: "2mb", extended: true }));

app.get("/api/images", async (req, res) => {
  try {
    const images = await Upload.find({});
    res.status(201).json(images);
  } catch (error) {
    res.status(404).json({ msg: "no data found" });
  }
});

app.post("/api/upload", async (req, res) => {
  const imageToSave = req.body.data;
  try {
    const newEntry = new Upload({
      title: "some text",
      image: imageToSave,
    });
    await newEntry.save();
    res.status(200).json({ msg: "Success" });
  } catch (error) {
    res.status(500).json({ msg: error });
    throw new Error("Something went wrong");
  }
  // const cloudinaryRes = await cloudinary.uploader.upload(imageToSave, {
  //   upload_preset: "ovikkhon",
  //   public_id: "study-material",
  //   use_filename: false,
  //   unique_filename: true,
  // });
  // console.log(cloudinaryRes);
  // save secure_url along with any other necessary items from the response to database
});

app.listen(5000, () => console.log("listening on port 5000"));
