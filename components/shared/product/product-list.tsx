import React from "react";
import Link from "next/link";
import ProductCard from "./product-card";
import { Product } from "@/types";

const ProductList = ({
  data,
  title,
  limit,
  viewAllHref,
}: {
  data: Product[];
  title?: string;
  limit?: number;
  viewAllHref?: string;
}) => {
  const limitedData = limit ? data.slice(0, limit) : data;

  return (
    <section className="pt-14">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        {title && (
          <h2 className="text-3xl font-extrabold tracking-tight">{title}</h2>
        )}
        {viewAllHref && (
          <Link
            href={viewAllHref}
            className="text-sm font-bold underline-offset-4 hover:underline"
          >
            View all
          </Link>
        )}
      </div>
      {data.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {limitedData.map((item: Product) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No products yet.</p>
      )}
    </section>
  );
};

export default ProductList;
