import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

import Menu from "@/components/shared/header/menu";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col">
        <div className="border-b container mx-auto">
          <div className="flex-center h-16 px-4">
            <Link href="/" className="w-22">
              <Image
                src="/images/logo.png"
                height={48}
                width={48}
                alt={APP_NAME}
              />
            </Link>
            {/* Main Nav */}
            <div className="ml-auto items-center flex space-x-4">
              <Menu />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6 container mx-auto">
          {children}
        </div>
      </div>
    </>
  );
}
