"use client";
import { Box } from "@mui/material";
import GridLayout, { GridItemType } from "./GridLayout";
import { useEffect, useState } from "react";
import OurBlogCard from "./blogs/BlogCard";
import ProductCard from "./products/ProductCard";
import { Product } from "../../prisma/generated/client";
import { configs } from "@/lib/configs";

// const gridItems: GridItemType[] = [
//   {
//     id: 1,
//     node: <Box>Hello</Box>,
//   },
//   {
//     id: 2,
//     node: <Box>Hello</Box>,
//   },
//   {
//     id: 3,
//     node: <Box>Hello</Box>,
//   },
//   {
//     id: 4,
//     node: <Box>Hello</Box>,
//   },
//   {
//     id: 5,
//     node: <Box>Hello</Box>,
//   },
// ];

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${configs.apiBaseUrl}/products`);
      const data = (await res.json()) as Product[];
      console.log({ products: data });

      setProducts(data);
    };
    fetchData();
  }, []);

  if (!products) {
    return null;
  }

  const createGridItems = (products: Product[]): GridItemType[] => {
    return products.map((product) => ({
      id: product.id,
      node: <ProductCard product={product} />,
    }));
  };

  return (
    <>
      <GridLayout
        gridItems={createGridItems(products)}
        gridProps={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }}
        itemsProps={{ elevation: 0 }}
        sx={{ height: 200 }}
      />
    </>
  );
};

export default AllProducts;
