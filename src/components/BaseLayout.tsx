"use client";

import { Box, Button, Stack } from "@mui/material";
import Navbar from "./Navbar";
import { usePathname, useRouter } from "next/navigation";
import { Session } from "next-auth";
import { SessionProvider, useSession } from "next-auth/react";
import Providers from "./Providers";
import { AdminContext } from "./admin/AdminContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const myTheme = createTheme({
  // Set up your custom MUI theme here
});

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();

  const session = useSession();

  const router = useRouter();

  const isAuthRoute: boolean = pathName === "/signin" || pathName === "/signup";
  const isAdminRoute: boolean = !!pathName?.includes("/admin");
  console.log("s :", session?.data?.user, "pn: ", pathName, isAdminRoute);

  return (
    <ThemeProvider theme={myTheme}>
      {!isAuthRoute && !isAdminRoute ? (
        <>
          <Navbar />
          <Box
            sx={{ height: "80px" }}
            id={"app-bar-with-responsive-menu"}
          ></Box>
        </>
      ) : null}{" "}
      {children}
    </ThemeProvider>
  );
};

export default BaseLayout;
