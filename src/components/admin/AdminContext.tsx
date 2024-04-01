import { createContext, useContext } from "react";
import { Blog, Product } from "../../../prisma/generated/client";

export interface AdminContextDefaultValueType {
  products: Product[];
  blogs: Blog[];
  setState: React.Dispatch<React.SetStateAction<AdminContextDefaultValueType>>;
}

export const adminContextDefaultValue: AdminContextDefaultValueType = {
  products: [],
  blogs: [],
  setState: () => {},
};

export const AdminContext = createContext<AdminContextDefaultValueType>(
  adminContextDefaultValue
);

export const useAdminContext = () => useContext(AdminContext);
