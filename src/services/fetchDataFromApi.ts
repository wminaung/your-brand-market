import { configs } from "@/lib/configs";
import { Blog, Product } from "../../prisma/generated/client";

export const getAllProducts = async () => {
  const res = await fetch(`${configs.apiBaseUrl}/products`);
  const data = (await res.json()) as Product[];

  return data;
};
export const getAllBlogs = async () => {
  const res = await fetch(`${configs.apiBaseUrl}/blogs`);
  const data = (await res.json()) as Blog[];

  return data;
};
