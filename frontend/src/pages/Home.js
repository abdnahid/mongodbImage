import axios from "axios";
import React, { useEffect, useState } from "react";
export default function Home() {
  const [images, setImages] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/images");
      setImages(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="gallery">
        {!images ? (
          <h3>No images to show</h3>
        ) : (
          images.map((image, index) => (
            <div key={index}>
              <img src={image.image} style={{ height: "300" }} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
