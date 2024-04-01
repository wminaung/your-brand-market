"use client";
import { useContext, useEffect, useState } from "react";

import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import ProductCard from "../products/ProductCard";
import { getAllBlogs, getAllProducts } from "@/services/fetchDataFromApi";
import { AdminContext, useAdminContext } from "./AdminContext";
import BlogCard from "../blogs/BlogCard";

// ----------------------------------------------------------------------

export default function AdminBlogsView() {
  const [openFilter, setOpenFilter] = useState(false);

  const adminData = useAdminContext();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllBlogs();
      const d = data[0];
      const p = [
        ...data,
        {
          ...d,
          id: "abc",
          title: "adfsdf sa ",
        },
        { ...d, id: "abcd" },
        { ...d, id: "abce" },
        { ...d, id: "abcf" },
        { ...d, id: "abgc" },
        { ...d, id: "abccd" },
      ];

      adminData.setState({ ...adminData, blogs: p });
    };
    fetchData();
  }, []);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Blogs
      </Typography>

      <Grid container spacing={3}>
        {adminData.blogs.map((blog) => (
          <Grid key={blog.id} xs={12} sm={6} md={3}>
            <BlogCard blog={blog} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
