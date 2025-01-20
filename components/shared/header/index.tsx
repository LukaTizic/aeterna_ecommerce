import React from "react";
import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";

const Header = () => {
  return (
    <header className="w-full border border-b border-gray-300">
      <div className="wrapper flex justify-between items-center">
        <div className="flex justify-start items-center">
          <Link href="/" className="flex justify-start items-center">
            <Image
              src="/images/logo.png"
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
              priority={true}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="space-x-2">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
