import React, { useState } from "react";
import axios from "axios";

export default function Upload() {
  const [previewImage, setPreviewImage] = useState(null);
  const selectAndPreview = (e) => {
    console.log(e.target.files[0].size);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => setPreviewImage(reader.result);
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!previewImage) return;
    try {
      const response = await axios.post("/api/upload", { data: previewImage });
      console.log(response);
    } catch (error) {}
  };
  return (
    <div>
      <h1 className="title">Upload an Image</h1>
      <form className="form" onSubmit={handleUpload}>
        <input
          id="fileInput"
          type="file"
          name="image"
          className="form-input"
          onChange={selectAndPreview}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
      {setPreviewImage && <img src={previewImage} style={{ height: 300 }} />}
    </div>
  );
}
