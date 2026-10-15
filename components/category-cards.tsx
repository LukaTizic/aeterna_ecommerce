import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Timer } from "lucide-react";

const categories = [
  {
    title: "Dress shirts",
    subtitle: "Oxford, check and stretch",
    href: `/search?category=${encodeURIComponent("Men's Dress Shirts")}`,
    image: "/images/sample-products/p2-1.jpg",
  },
  {
    title: "Sweatshirts",
    subtitle: "Soft fleece hoodies",
    href: `/search?category=${encodeURIComponent("Men's Sweatshirts")}`,
    image: "/images/sample-products/p6-1.jpg",
  },
];

const cardClass =
  "flex items-center gap-4 rounded-[20px] border bg-card py-3.5 pl-3.5 pr-5 transition-colors hover:border-foreground/20";

const CategoryCards = () => {
  return (
    <section
      aria-label="Shop by category"
      className="grid gap-4 pt-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {categories.map((item) => (
        <Link key={item.title} href={item.href} className={cardClass}>
          <span className="flex h-[92px] w-[92px] shrink-0 items-center justify-center overflow-hidden rounded-[14px] border bg-white">
            <Image
              src={item.image}
              alt=""
              width={92}
              height={92}
              className="h-auto w-[88%]"
            />
          </span>
          <span className="flex flex-1 flex-col gap-1">
            <span className="text-lg font-bold">{item.title}</span>
            <span className="text-sm text-muted-foreground">
              {item.subtitle}
            </span>
          </span>
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      ))}
      <Link href="#deal" className={cardClass}>
        <span className="flex h-[92px] w-[92px] shrink-0 items-center justify-center rounded-[14px] bg-primary text-primary-foreground">
          <Timer className="h-9 w-9" aria-hidden="true" />
        </span>
        <span className="flex flex-1 flex-col gap-1">
          <span className="text-lg font-bold">Deal of the month</span>
          <span className="text-sm text-muted-foreground">
            A better price, for a short time
          </span>
        </span>
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </Link>
    </section>
  );
};

export default CategoryCards;
