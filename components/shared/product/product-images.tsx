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
    <div className="flex flex-col gap-4">
      <div className="flex aspect-square max-h-[640px] items-center justify-center overflow-hidden rounded-[20px] bg-white">
        <Image
          src={images[current]}
          alt="Product image"
          width={800}
          height={800}
          priority
          sizes="(min-width: 1024px) 640px, 90vw"
          className="h-auto w-[80%] object-contain"
        />
      </div>
      {images.length > 1 && (
        <div className="flex flex-wrap gap-3">
          {images.map((image, id) => (
            <button
              type="button"
              key={image}
              onClick={() => setCurrent(id)}
              aria-label={`Show image ${id + 1}`}
              aria-pressed={current === id}
              className={cn(
                "flex h-[88px] w-[88px] items-center justify-center overflow-hidden rounded-2xl border-2 bg-white transition-colors",
                current === id
                  ? "border-primary"
                  : "border-border hover:border-foreground/30"
              )}
            >
              <Image
                src={image}
                width={88}
                height={88}
                alt=""
                className="h-auto w-[86%]"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImages;
