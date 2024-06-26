"use client";

import Footer from "@/components/Footer";
import LandingHolderSection from "@/components/landing/LandingHolderSection";
import Navbar from "@/components/Navbar";
import SecondSection from "@/components/landing/SecondSection";
import ThirdSection from "@/components/landing/ThirdSection";
import LandingImage from "@/components/images/LandingImage";
import { Box, Button, Divider } from "@mui/material";
import JoinUsSection from "@/components/landing/JoinUsSection";
import ExploreMoreDivider from "@/components/landing/ExploreMoreDivider";
import CustomerTestimonialsSection from "@/components/landing/CustomerTestimonialsSection";
import Image from "next/image";
import AnimatedComponent from "@/test/AnimatedComponent";
import OurblogsSection from "@/components/landing/OurblogsSection";
import EditorView from "./EditorView";

const HomeView = () => {
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {
        // Landing Page Section
      }
      <Box sx={{ mt: 10, p: 2 }}>
        <EditorView />
      </Box>
      {/* <LandingHolderSection />
      <SecondSection />
      <ThirdSection />
      <ExploreMoreDivider />
      <CustomerTestimonialsSection />
      <OurblogsSection />
      <JoinUsSection />
      <Footer /> */}
    </Box>
  );
};

export default HomeView;
