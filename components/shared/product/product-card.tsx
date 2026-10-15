import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Star } from "lucide-react";
import { Product } from "@/types";
import { formatCurrency } from "@/lib/utils";
import QuickAdd from "./quick-add";

const ProductCard = ({ product }: { product: Product }) => {
  const href = `/product/${product.slug}`;

  return (
    <div className="flex w-full flex-col gap-3 rounded-2xl border bg-card p-2 sm:gap-3.5 sm:rounded-[20px] sm:p-3">
      <Link
        href={href}
        className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[14px] bg-white"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          width={400}
          height={400}
          sizes="(min-width: 1024px) 280px, 45vw"
          className="h-auto w-[86%] object-contain"
        />
      </Link>

      <div className="flex flex-col gap-1.5 px-1.5">
        <span className="text-xs text-muted-foreground sm:text-[13px]">
          {product.brand}
        </span>
        <Link
          href={href}
          className="text-sm font-bold leading-snug hover:underline sm:text-base"
        >
          {product.name}
        </Link>
        <span className="flex items-center gap-1.5 text-[13px] text-muted-foreground">
          <Star
            className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
            aria-hidden="true"
          />
          <span className="font-semibold text-foreground">
            {Number(product.rating).toFixed(1)}
          </span>
          ({product.numReviews})
        </span>
      </div>

      <div className="mt-auto flex items-center justify-between gap-2 px-1.5 pb-1">
        <span className="text-base font-extrabold tracking-tight sm:text-xl">
          {formatCurrency(product.price)}
        </span>
        {product.stock > 0 ? (
          <QuickAdd
            item={{
              productId: product.id,
              name: product.name,
              slug: product.slug,
              price: product.price,
              qty: 1,
              image: product.images[0],
            }}
          />
        ) : (
          <span className="flex h-11 items-center rounded-full bg-muted px-3 text-xs font-semibold text-muted-foreground sm:px-4 sm:text-sm">
            Sold out
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
