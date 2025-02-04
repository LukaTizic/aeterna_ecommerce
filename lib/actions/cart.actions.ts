"use server";

import { CartItem } from "@/types";
import { cookies } from "next/headers";
import { formatError } from "../utils";
import { auth } from "@/auth";

export async function addItemToCart(data: CartItem) {
  try {
    // check for cart cookie
    const sessionCardId = (await cookies()).get("sessionCartId")?.value;
    if (!sessionCardId) throw new Error("Cart session not found");

    // get session and user id
    const session = await auth();
    const userId = session?.user?.id ? (session.user.id as string) : undefined;

    console.log({
      "Session Cart id": sessionCardId,
      "User ID": userId,
    });

    return {
      success: true,
      message: "Item added to cart",
    };
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
    };
  }
}
