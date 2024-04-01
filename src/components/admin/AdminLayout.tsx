"use client";
import React, { useState } from "react";
import AdminDrawer from "./AdminDrawer";
import {
  AdminContext,
  AdminContextDefaultValueType,
  adminContextDefaultValue,
} from "./AdminContext";
import { useSession } from "next-auth/react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState(adminContextDefaultValue);

  return (
    <>
      <AdminContext.Provider value={{ ...state, setState }}>
        <AdminDrawer>{children}</AdminDrawer>
      </AdminContext.Provider>
    </>
  );
};

export default AdminLayout;
