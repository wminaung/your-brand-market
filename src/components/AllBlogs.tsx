"use client";
import { Box } from "@mui/material";
import GridLayout, { GridItemType } from "./GridLayout";
import { useEffect, useState } from "react";
import ProductCard from "./products/ProductCard";
import { Blog, Product } from "../../prisma/generated/client";
import { configs } from "@/lib/configs";
import BlogCard from "./blogs/BlogCard";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${configs.apiBaseUrl}/blogs`);
      const data = (await res.json()) as Blog[];
      console.log({ blogs: data });

      setBlogs(data);
    };
    fetchData();
  }, []);

  if (!blogs) {
    return null;
  }

  const createGridItems = (products: Blog[]): GridItemType[] => {
    return products.map((blog) => ({
      id: blog.id,
      node: <BlogCard blog={blog} />,
    }));
  };

  return (
    <>
      <GridLayout
        gridItems={createGridItems(blogs)}
        gridProps={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }}
        itemsProps={{ elevation: 0 }}
        sx={{ height: 200 }}
      />
    </>
  );
};

export default AllBlogs;
