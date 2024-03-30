"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Google } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export interface ExploreCardType {
  id?: number;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
}
export default function ExploreCard({
  icon,
  description,
  title,
}: ExploreCardType) {
  return (
    <Card sx={{ minWidth: 275, height: "inherit" }} elevation={0}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          height: "100%",
        }}
      >
        {icon ? icon : <Google />}
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
            {title ? title : "Diverse Eco-Friendly Products"}
          </Typography>
          <Typography
            sx={{ mb: 1.5 }}
            textAlign={"center"}
            color="text.secondary"
          >
            {description
              ? description
              : `Explore eco-friendly products, from sustainable fashion to green
              home essentials, for a variety of environmentally responsible
              options.`}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
