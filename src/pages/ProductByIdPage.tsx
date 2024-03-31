"use client";

import ProductCard from "@/components/products/ProductCard";
import { useParams } from "next/navigation";
import { Product } from "../../prisma/generated/client";
import { useEffect, useState } from "react";
import { configs } from "@/lib/configs";

const ProductByIdPage = () => {
  const [product, setProduct] = useState<Product>();

  const { id } = useParams() as { id: string };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${configs.apiBaseUrl}/products/${id}`);
      if (!res.ok) {
        console.log("fetch is not ok");
        return;
      }
      const data = (await res.json()) as Product;
      console.log({ products: data });

      setProduct(data);
    };
    fetchData();
  }, []);

  if (!product) return null;

  return (
    <div>
      <ProductCard product={product} />
    </div>
  );
};

export default ProductByIdPage;
