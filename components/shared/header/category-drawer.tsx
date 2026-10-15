import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type CategoryCount = { category: string; _count: number };

const CategoryDrawer = ({ categories }: { categories: CategoryCount[] }) => {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-11 w-11 rounded-full"
          aria-label="Browse categories"
        >
          <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-full max-w-sm">
        <DrawerHeader>
          <DrawerTitle>Shop by category</DrawerTitle>
          <div className="mt-4 space-y-1">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <DrawerClose asChild>
                <Link href="/search">All products</Link>
              </DrawerClose>
            </Button>
            {categories.map((category) => (
              <Button
                variant="ghost"
                className="w-full justify-start"
                key={category.category}
                asChild
              >
                <DrawerClose asChild>
                  <Link
                    href={`/search?category=${encodeURIComponent(
                      category.category
                    )}`}
                  >
                    {category.category} ({category._count})
                  </Link>
                </DrawerClose>
              </Button>
            ))}
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default CategoryDrawer;
