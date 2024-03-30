import { prisma } from "@/lib/db";
import { RedirectType, redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { Prisma } from "../../../../prisma/generated/client";
import { getProductAssets } from "@/lib/utils";
interface ProductData {
  id?: string;
  name: string;
  description: string;

  url: string;
}

export const data: ProductData[] = [
  {
    name: "Garlic",
    description: "Garlic",
    url: "/apple.png",
  },
  {
    name: "Ginger",
    description: "Ginger",
    url: "/apple.png",
  },
  {
    name: "GreenChiliPepper",
    description: "GreenChiliPepper",
    url: "/apple.png",
  },
  {
    name: "GreenTomato",
    description: "GreenTomato",
    url: "/apple.png",
  },
  {
    name: "Onion",
    description: "Onion",
    url: "/apple.png",
  },
  {
    name: "Potato",
    description: "Potato",
    url: "/apple.png",
  },
  {
    name: "RedChiliPeppers",
    description: "RedChiliPeppers",
    url: "/apple.png",
  },
  {
    name: "RedTomato",
    description: "RedTomato",
    url: "/apple.png",
  },
];

export async function GET(request: Request) {
  // try {
  //   data.forEach(async ({ description, name, url }) => {
  //     const aa = await prisma.product.create({
  //       data: {
  //         name,
  //         description,
  //         userId: "5c70f3c2-eb55-4369-b17e-2447cd8a4c2e",
  //         ProductAssets: { create: { url: "/assets/images/garlic.jpg" } },
  //       },
  //     });
  //   });
  //   return NextResponse.json({ ok: "ok" }, { status: 200 });
  // } catch (error) {
  //   return NextResponse.json({ error }, { status: 500 });
  // }

  try {
    const productAssets = await prisma.productAsset.findMany();
    return NextResponse.json(productAssets, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
