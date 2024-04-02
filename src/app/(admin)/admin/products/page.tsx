import AdminDrawer from "@/components/admin/AdminDrawer";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminProductsView from "@/components/admin/AdminProductsView";
import HomePage from "@/views/HomeView";

export default async function ProductsPage() {
  return (
    <main>
      <h1>ProductsPage</h1>
      <AdminProductsView />
    </main>
  );
}
