"use client";

import { useState } from "react";

function CoastalGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(0);

  console.log(images);

  return (
    <div className="lg:min-h-screen bg-gradient-to-br">
      <div className="w-full max-w-4xl mx-auto overflow-hidden bg-white/80 backdrop-blur-sm rounded-xl shadow-xl">
        <div className="p-4 space-y-4">
          {/* Main Image */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-md">
            <img
              src={images[selectedImage]} // Optional chaining to handle undefined
              alt={images[selectedImage]} // Providing default alt text
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`
                  relative aspect-[4/3] overflow-hidden rounded-lg transition-all duration-300 shadow-sm
                  hover:ring-2 hover:ring-offset-2 hover:ring-blue-500 hover:shadow-md
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                  ${selectedImage === index ? "ring-2 ring-offset-2 ring-blue-500" : ""}
                `}
              >
                <img
                  src={image || "/placeholder.svg"}
                 
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoastalGallery;
