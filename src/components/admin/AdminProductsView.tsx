"use client";
import { useContext, useEffect, useState } from "react";

import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import ProductCard from "../products/ProductCard";
import { getAllProducts } from "@/services/fetchDataFromApi";
import { AdminContext, useAdminContext } from "./AdminContext";

// import { products } from "src/_mock/products";

// import ProductCard from "../product-card";
// import ProductSort from "../product-sort";
// import ProductFilters from "../product-filters";
// import ProductCartWidget from "../product-cart-widget";

// ----------------------------------------------------------------------

export default function AdminProductsView() {
  const [openFilter, setOpenFilter] = useState(false);

  const adminData = useAdminContext();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProducts();
      const d = data[0];
      const p = [
        ...data,
        {
          ...d,
          id: "abc",
          name: "adfsdf sa ",
        },
        { ...d, id: "abcd" },
        { ...d, id: "abce" },
        { ...d, id: "abcf" },
        { ...d, id: "abgc" },
        { ...d, id: "abccd" },
      ];

      adminData.setState({ ...adminData, products: p });
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
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Products
      </Typography>

      <Grid container spacing={3}>
        {adminData.products.map((product) => (
          <Grid key={product.id} xs={12} sm={6} md={3}>
            <ProductCard product={product} isAdminRoute />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
