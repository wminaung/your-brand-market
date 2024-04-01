"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Google } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Avatar, Button, CardActions, CardMedia } from "@mui/material";
import { Blog } from "../../../prisma/generated/client";

export interface BlogCardType {
  blog: Blog;
  isLanding?: boolean;
}
export default function BlogCard({ blog, isLanding }: BlogCardType) {
  const { content, id, imageUrl, title, userId } = blog;

  return (
    <Card
      sx={{
        minWidth: 200,
        pt: 4,
        height: "100%",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      elevation={1}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardMedia
          title="Remy Sharp"
          sx={{
            borderRadius: 1,
            width: "80%",
            minHeight: "120px",
          }}
          image={imageUrl || "/assets/i2.png"}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            color={"#2BAE7A"}
            component="div"
            title={title}
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
              maxWidth: "100%",
            }}
          >
            {title ? title : "Diverse Eco-Friendly Products"}
          </Typography>
          <Typography
            aria-label={content}
            sx={{
              mb: 1.5,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              maxWidth: "100%",
            }}
            color="text.secondary"
          >
            {content
              ? content
              : `Explore eco-friendly products, from sustainable fashion to green
            home essentials, for a variety of environmentally responsible
            options.`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            sx={{
              bgcolor: "#2BAE7A",
              ":hover": { bgcolor: "white", color: "#2BAE7A" },
              color: "white",
              fontWeight: "bold",
            }}
          >
            READ MORE
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}
