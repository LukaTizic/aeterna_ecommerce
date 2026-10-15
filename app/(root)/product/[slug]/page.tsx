import React from "react";
import Link from "next/link";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import { CreditCard, RotateCcw, Truck } from "lucide-react";

import ProductImages from "@/components/shared/product/product-images";
import AddToCart from "@/components/shared/product/add-to-cart";
import { getMyCart } from "@/lib/actions/cart.actions";
import { auth } from "@/auth";
import ReviewList from "./review-list";
import Rating from "@/components/shared/product/rating";
import { formatCurrency } from "@/lib/utils";

export const metadata = {
  title: "Product",
};

const perks = [
  { icon: Truck, strong: "Free shipping", text: "on orders above €100" },
  { icon: RotateCcw, strong: "Money back", text: "within 30 days" },
  { icon: CreditCard, strong: "Pay", text: "by card, PayPal or cash on delivery" },
];

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;

  const product = await getProductBySlug(slug);

  if (!product) notFound();

  const session = await auth();
  const userId = session?.user?.id;

  const cart = await getMyCart();

  const inStock = product.stock > 0;

  return (
    <div className="flex flex-col gap-5 pb-16">
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
      >
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span aria-hidden="true">›</span>
        <Link
          href={`/search?category=${encodeURIComponent(product.category)}`}
          className="hover:text-foreground"
        >
          {product.category}
        </Link>
        <span aria-hidden="true">›</span>
        <span className="font-semibold text-foreground">{product.name}</span>
      </nav>

      <section className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_440px]">
        {/* Images */}
        <div className="rounded-[28px] border bg-card p-5">
          <ProductImages images={product.images} />
        </div>

        {/* Details and actions */}
        <div className="flex flex-col gap-6 rounded-[28px] border bg-card p-6 md:p-8">
          <div className="flex flex-col gap-3">
            <span className="self-start rounded-full bg-muted px-3 py-1.5 text-sm font-semibold">
              {product.brand}
            </span>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
              {product.name}
            </h1>
            <a href="#reviews" className="self-start">
              <Rating
                value={Number(product.rating)}
                caption={`${Number(product.rating).toFixed(1)} · ${product.numReviews} reviews`}
              />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-4xl font-extrabold tracking-tight">
              {formatCurrency(product.price)}
            </span>
            {inStock ? (
              <span className="flex items-center gap-2 rounded-full bg-muted px-3.5 py-2 text-sm font-semibold">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-primary"
                />
                {product.stock <= 5
                  ? `Only ${product.stock} left`
                  : "In stock"}
              </span>
            ) : (
              <span className="rounded-full bg-destructive/10 px-3.5 py-2 text-sm font-semibold text-destructive">
                Out of stock
              </span>
            )}
          </div>

          {inStock && (
            <AddToCart
              cart={cart}
              item={{
                productId: product.id,
                name: product.name,
                slug: product.slug,
                price: product.price,
                qty: 1,
                image: product.images![0],
              }}
            />
          )}

          <ul className="flex flex-col gap-2.5">
            {perks.map(({ icon: Icon, strong, text }) => (
              <li
                key={strong}
                className="flex items-center gap-3.5 rounded-2xl bg-muted/60 px-4 py-3.5 text-sm"
              >
                <Icon
                  className="h-5 w-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-bold">{strong}</strong> {text}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2 border-t pt-6">
            <h2 className="font-bold">Description</h2>
            <p className="leading-relaxed text-muted-foreground">
              {product.description}
            </p>
          </div>
        </div>
      </section>

      <section
        id="reviews"
        className="scroll-mt-6 rounded-[28px] border bg-card p-6 md:p-8"
      >
        <h2 className="text-2xl font-extrabold tracking-tight">
          Customer reviews
        </h2>
        <ReviewList
          userId={userId || ""}
          productId={product.id}
          productSlug={product.slug}
        />
      </section>
    </div>
  );
};

export default ProductDetailsPage;
