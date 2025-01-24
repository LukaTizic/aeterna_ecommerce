"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface ProductImagesProps {
  images: string[];
}

const ProductImages: React.FC<ProductImagesProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="product image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center border-2 border-gray-500"
      />
      <div className="flex">
        {images.map((image, id) => (
          <div
            key={image}
            onClick={() => setCurrent(id)}
            className={cn(
              "border-b-2 mr-2 cursor-pointer hover:border-green-600",
              current === id && "border-green-500"
            )}
          >
            <Image src={image} width={100} height={100} alt="single image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
