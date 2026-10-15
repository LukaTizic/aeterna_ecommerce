import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";
import ModeToggle from "./mode-toggle";
import UserButton from "./user-button";

const Menu = () => {
  return (
    <nav aria-label="Account" className="flex items-center gap-1">
      <ModeToggle />
      <UserButton />
      <Button
        asChild
        className="h-11 w-11 rounded-full px-0 font-semibold sm:w-auto sm:px-5"
      >
        <Link href="/cart" aria-label="Cart">
          <ShoppingBag />
          <span className="hidden sm:inline">Cart</span>
        </Link>
      </Button>
    </nav>
  );
};

export default Menu;
