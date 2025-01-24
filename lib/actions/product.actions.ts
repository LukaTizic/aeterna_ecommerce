"use server";
import { prisma } from "@/db/prisma";
import { convertToObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
// Latest products
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });
  return convertToObject(data);
}
