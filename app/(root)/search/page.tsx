import ProductCard from "@/components/shared/product/product-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  getAllProducts,
  getAllCategories,
} from "@/lib/actions/product.actions";
import Link from "next/link";
import { title } from "process";
import React from "react";

const prices = [
  {
    name: "€1 to €50",
    value: "1-50",
  },
  {
    name: "€51 to €100",
    value: "51-100",
  },
  {
    name: "€101 to €200",
    value: "101-200",
  },
  {
    name: "€201 to €500",
    value: "201-500",
  },
  {
    name: "€501 to €1000",
    value: "501-1000",
  },
];

const ratings = [4, 3, 2, 1];

const sortOrders = ["newest", "rating", "lowest", "highest"];

export async function generateMetadata(props: {
  searchParams: Promise<{
    query: string;
    category: string;
    price: string;
    rating: string;
  }>;
}) {
  const {
    query = "all",
    category = "all",
    price = "all",
    rating = "all",
  } = await props.searchParams;

  const isQuerySet = query && query !== "all" && query.trim() !== "";
  const isCategorySet =
    category && category !== "all" && category.trim() !== "";
  const isPriceSet = price && price !== "all" && price.trim() !== "";
  const isRatingSet = rating && rating !== "all" && rating.trim() !== "";

  if (isQuerySet || isCategorySet || isPriceSet || isRatingSet) {
    return {
      title: `
      Search ${isQuerySet ? query : ""} 
      ${isCategorySet ? `: ${category}` : ""}
      ${isPriceSet ? `:  ${price}€` : ""}
      ${isRatingSet ? `:  ${rating}  ★` : ""}`,
    };
  } else {
    return {
      title: "Search Products",
    };
  }
}

const SearchPage = async (props: {
  searchParams: Promise<{
    query?: string;
    category?: string;
    price?: string;
    rating?: string;
    sort?: string;
    page?: string;
  }>;
}) => {
  const {
    query = "all",
    category = "all",
    price = "all",
    rating = "all",
    sort = "newest",
    page = "1",
  } = await props.searchParams;

  // Make filter URL
  const getFilterUrl = ({
    c, // category
    p, // price
    s, // sort
    r, // rating
    pg, // page
  }: {
    c?: string;
    p?: string;
    s?: string;
    r?: string;
    pg?: string;
  }) => {
    const params = { query, category, price, rating, sort, page };

    if (c) params.category = c;
    if (p) params.price = p;
    if (s) params.sort = s;
    if (r) params.rating = r;
    if (pg) params.page = pg;

    return `/search?${new URLSearchParams(params).toString()}`;
  };

  const products = await getAllProducts({
    query,
    category,
    price,
    rating,
    sort,
    page: Number(page),
  });

  const categories = await getAllCategories();

  return (
    <div className="grid md:grid-cols-5 md:gap-5">
      <div className="filter-links">
        {/* Category Links */}
        <div className="text-xl mb-2 mt-3">Department</div>
        <div>
          <ul className="space-y-1 border-2  border-gray-300 dark:border-gray-700  pl-5 py-5">
            <li>
              <Link
                className={`${
                  (category === "all" || category === "") &&
                  "font-bold text-cyan-500"
                }`}
                href={getFilterUrl({ c: "all" })}
              >
                Any
              </Link>
            </li>
            {categories.map((x) => (
              <li key={x.category}>
                <Link
                  className={`${
                    category === x.category && "font-bold text-cyan-500 "
                  }`}
                  href={getFilterUrl({ c: x.category })}
                >
                  {x.category}
                </Link>
              </li>
            ))}
          </ul>
        </div>{" "}
        {/* Price Links */}
        <div className="text-xl mb-2 mt-7">Price</div>
        <div>
          <ul className="space-y-1 border-2  border-gray-300 dark:border-gray-700 pl-5 py-5">
            <li>
              <Link
                className={`${price === "all" && "font-bold text-cyan-500"}`}
                href={getFilterUrl({ p: "all" })}
              >
                Any
              </Link>
            </li>
            {prices.map((p) => (
              <li key={p.value}>
                <Link
                  className={`${
                    price === p.value && "font-bold text-cyan-500 "
                  }`}
                  href={getFilterUrl({ p: p.value })}
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Rating Links */}
        <div className="text-xl mb-2 mt-7">Rating</div>
        <div>
          <ul className="space-y-1 border-2  border-gray-300 dark:border-gray-700 pl-5 py-5">
            <li>
              <Link
                className={`${rating === "all" && "font-bold text-cyan-500"}`}
                href={getFilterUrl({ r: "all" })}
              >
                Any
              </Link>
            </li>
            {ratings.map((r) => (
              <li key={r}>
                <Link
                  className={`${
                    rating === r.toString() && "font-bold text-cyan-500 "
                  }`}
                  href={getFilterUrl({ r: `${r}` })}
                >
                  {`${r}★ & up`}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:col-span-4 space-y-4">
        <div className=" hidden lg:flex-between  lg:flex-row my-4">
          <div className="flex items-center space-x-2 flex-wrap">
            {query !== "all" && query !== "" && (
              <Badge className="bg-gray-600 text-white">
                Query:{" "}
                <span className="text-cyan-500 pl-1 capitalize">{query}</span>.
              </Badge>
            )}
            {category !== "all" && category !== "" && (
              <Badge className="bg-gray-600 text-white">
                Category:{" "}
                <span className="text-cyan-500 pl-1 ">{category}</span>
              </Badge>
            )}
            {price !== "all" && (
              <Badge className="bg-gray-600 text-white">
                Price:{" "}
                <span className="pl-1 font-bold text-cyan-500">{price}€</span>
              </Badge>
            )}
            {rating !== "all" && (
              <Badge className="bg-gray-600 text-white">
                Rating:{" "}
                <span className="px-1 font-bold text-cyan-500">{rating} ★</span>
                & up
              </Badge>
            )}
            {(query !== "all" && query !== "") ||
            (category !== "all" && category !== "") ||
            rating !== "all" ||
            price !== "all" ? (
              <Button asChild variant="link" className="text-red-500">
                <Link href="/search">Clear</Link>
              </Button>
            ) : null}
          </div>{" "}
          <div>
            Sort by:{" "}
            {sortOrders.map((s) => (
              <Link key={s} href={getFilterUrl({ s })}>
                <Badge
                  className={`mx-1 bg-gray-600 text-white ${
                    sort === s ? "font-bold text-cyan-500 " : ""
                  }`}
                >
                  {" "}
                  {s}
                </Badge>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {products.data.length === 0 && <div>No products found.</div>}
          {products.data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
