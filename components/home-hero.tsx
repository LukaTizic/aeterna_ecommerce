import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Product } from "@/types";
import { formatCurrency } from "@/lib/utils";

const HomeHero = ({ product }: { product?: Product }) => {
  return (
    <section className="grid items-center overflow-hidden rounded-[28px] bg-primary text-primary-foreground lg:grid-cols-2">
      <div className="flex flex-col gap-6 p-8 md:p-14">
        <span className="self-start rounded-full bg-white/15 px-3.5 py-2 text-sm font-semibold">
          New arrivals are in
        </span>
        <h1 className="text-4xl font-extrabold leading-[1.03] tracking-tight md:text-6xl">
          Everyday shirts, done right.
        </h1>
        <p className="max-w-md text-lg leading-relaxed opacity-80">
          Oxford, check and stretch shirts that fit well and last. Free
          shipping on orders above €100.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/search"
            className="inline-flex h-14 items-center gap-2.5 rounded-full bg-white px-7 font-bold text-[#1B2A4A] hover:bg-white/90"
          >
            Shop now
            <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
          </Link>
          <Link
            href="#deal"
            className="inline-flex h-14 items-center rounded-full border border-white/40 px-7 font-semibold hover:bg-white/10"
          >
            See the deal
          </Link>
        </div>
      </div>

      {product && (
        <div className="p-4 md:p-6">
          <div className="relative mx-auto flex aspect-square max-h-[520px] items-center justify-center rounded-[20px] bg-white">
            <Image
              src={product.images[0]}
              alt={product.name}
              width={520}
              height={520}
              priority
              sizes="(min-width: 1024px) 520px, 90vw"
              className="h-auto w-[74%] object-contain"
            />
            <Link
              href={`/product/${product.slug}`}
              className="absolute bottom-4 left-4 flex items-center gap-4 rounded-2xl border border-[#E7E9ED] bg-white px-4 py-3 text-[#14161A] shadow-[0_8px_24px_rgba(20,22,26,0.08)]"
            >
              <span className="flex flex-col gap-0.5">
                <span className="text-[15px] font-bold">{product.name}</span>
                <span className="flex items-center gap-1 text-[13px] text-[#5B6270]">
                  <Star
                    className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                  {Number(product.rating).toFixed(1)} · {product.numReviews}{" "}
                  reviews
                </span>
              </span>
              <span className="text-[17px] font-extrabold">
                {formatCurrency(product.price)}
              </span>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomeHero;
