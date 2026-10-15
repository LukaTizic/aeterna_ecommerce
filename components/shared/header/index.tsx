import React from "react";
import Link from "next/link";
import { SearchIcon, Truck } from "lucide-react";
import { APP_NAME } from "@/lib/constants";
import { getAllCategories } from "@/lib/actions/product.actions";
import Menu from "./menu";
import CategoryDrawer from "./category-drawer";
import Search from "./search";

const Header = async () => {
  const categories = await getAllCategories();

  return (
    <header className="w-full border-b bg-card">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-x-3 gap-y-3 px-5 py-3 md:gap-x-8 md:px-10">
        <div className="flex items-center gap-1 sm:gap-2">
          <CategoryDrawer categories={categories} />
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl"
            aria-label={`${APP_NAME} home`}
          >
            {APP_NAME.toLowerCase()}
            <span className="text-primary">.</span>
          </Link>
        </div>
        <div className="hidden flex-1 md:block md:max-w-xl">
          <Search />
        </div>
        <div className="ml-auto flex items-center gap-1">
          <Link
            href="/search"
            aria-label="Search products"
            className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-muted md:hidden"
          >
            <SearchIcon className="h-5 w-5" aria-hidden="true" />
          </Link>
          <Menu />
        </div>
      </div>
      <div className="mx-auto flex min-h-12 w-full max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 md:px-10">
        <nav
          aria-label="Shop"
          className="flex w-full min-w-0 items-center gap-x-7 overflow-x-auto whitespace-nowrap text-[15px] font-semibold md:w-auto md:flex-wrap md:whitespace-normal"
        >
          <Link href="/search" className="py-3 hover:text-muted-foreground">
            All products
          </Link>
          {categories.map((item) => (
            <Link
              key={item.category}
              href={`/search?category=${encodeURIComponent(item.category)}`}
              className="py-3 hover:text-muted-foreground"
            >
              {item.category}
            </Link>
          ))}
          <Link href="/#deal" className="py-3 text-primary hover:opacity-80">
            Deal of the month
          </Link>
        </nav>
        <span className="hidden items-center gap-2 text-sm text-muted-foreground lg:flex">
          <Truck className="h-[18px] w-[18px]" aria-hidden="true" />
          Free shipping on orders above €100
        </span>
      </div>
    </header>
  );
};

export default Header;
