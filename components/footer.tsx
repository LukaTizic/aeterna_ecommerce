import Link from "next/link";
import { APP_NAME } from "@/lib/constants";

const shopLinks = [
  { label: "All products", href: "/search" },
  {
    label: "Dress shirts",
    href: `/search?category=${encodeURIComponent("Men's Dress Shirts")}`,
  },
  {
    label: "Sweatshirts",
    href: `/search?category=${encodeURIComponent("Men's Sweatshirts")}`,
  },
  { label: "Deal of the month", href: "/#deal" },
];

const accountLinks = [
  { label: "Sign in", href: "/sign-in" },
  { label: "Create account", href: "/sign-up" },
  { label: "My orders", href: "/user/orders" },
  { label: "Profile", href: "/user/profile" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card">
      <div className="mx-auto w-full max-w-7xl px-5 pb-7 pt-14 md:px-10">
        <div className="flex flex-wrap justify-between gap-12">
          <div className="flex max-w-xs flex-col gap-3.5">
            <div className="text-2xl font-extrabold tracking-tight">
              {APP_NAME.toLowerCase()}
              <span className="text-primary">.</span>
            </div>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              Shirts and sweatshirts that fit well and last.
            </p>
          </div>
          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-20 gap-y-10 text-[15px]"
          >
            <div className="flex flex-col gap-3">
              <div className="mb-1 font-bold">Shop</div>
              {shopLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <div className="mb-1 font-bold">Account</div>
              {accountLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3 text-muted-foreground">
              <div className="mb-1 font-bold text-foreground">Good to know</div>
              <span>Free shipping above €100</span>
              <span>Money back within 30 days</span>
              <span>Card, PayPal or cash on delivery</span>
            </div>
          </nav>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t pt-6 text-sm text-muted-foreground">
          <span>
            © {currentYear} {APP_NAME}. All rights reserved.
          </span>
          <span>
            Designed and built by{" "}
            <a
              href="https://semperor.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-foreground hover:underline"
            >
              Semperor
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
