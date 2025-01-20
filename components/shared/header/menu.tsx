import { Button } from "@/components/ui/button";
import { ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import ModelToggle from "./mode-toggle";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import ModeToggle from "./mode-toggle";
// import { EllipsisVertical } from "lucide-react";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="flex w-full max-w-xs gap-1">
        <ModelToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <Button asChild>
          <Link href="/sign-in">
            <UserIcon /> Sign In
          </Link>
        </Button>
      </nav>
      {/* If there's going to be more content, add sheet component below */}
      {/* <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription></SheetDescription>
            <ModeToggle />
            <Button asChild variant="ghost">
              <Link href="/cart">
                <ShoppingCart /> Cart
              </Link>
            </Button>
          </SheetContent>
        </Sheet>
      </nav> */}
    </div>
  );
};

export default Menu;
