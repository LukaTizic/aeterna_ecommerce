import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export const { auth: middleware } = NextAuth(authConfig);

// Only run middleware on page requests. Without this it runs on every
// JS chunk, image, font and API call, which burns through Vercel usage.
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images/|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|txt|xml)$).*)",
  ],
};
