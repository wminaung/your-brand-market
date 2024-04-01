"use client";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Google } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {
  Button,
  CardActions,
  CardMedia,
  Container,
  Stack,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { Prisma, Product } from "../../../prisma/generated/client";
import { useAdminContext } from "../admin/AdminContext";
import { useState } from "react";

export interface ProductCardType {
  product: Product;
  isAdminRoute?: boolean;
}
export default function ProductCard({
  product,
  isAdminRoute,
}: ProductCardType) {
  const { id, description, imageUrl, discountPrice, name, price, userId } =
    product;

  const [isover, setIsover] = useState(false);
  const router = useRouter();

  const handleDetails = () => {
    router.push(`/products/${id}`);
  };
  const handleAddToCart = () => {
    console.log("add to cart=");
  };

  return (
    <Card sx={{ height: "inherit", border: "1px solid #2BAE7A" }} elevation={1}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        onMouseOver={() => {
          setIsover(true);
        }}
        onMouseOut={() => {
          setIsover(false);
        }}
      >
        <CardMedia
          sx={{
            width: isover ? 140 : "100%",
            height: 140,
            objectFit: "cover",
            transition: "all 0.3s",
          }}
          image={imageUrl || "/assets/i1.png"}
          title={name}
        />
        <Box
          sx={{
            height: "75%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" color={"#2BAE7A"} py={2} component="div">
            {name}
          </Typography>
          <Typography
            sx={{ mb: 1.5 }}
            textAlign={"center"}
            color="text.secondary"
          >
            {description}
          </Typography>
        </Box>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {isAdminRoute ? (
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <Button
              sx={{ width: "50%" }}
              variant="outlined"
              color="primary"
              size="small"
            >
              Edit
            </Button>
          </Box>
        ) : (
          <>
            <Button variant="text" onClick={() => handleDetails()}>
              details
            </Button>
            <Button variant="outlined" size="small">
              Add to Cart
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  );
}
