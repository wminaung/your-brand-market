import AdminBlogsView from "@/components/admin/AdminBlogsView";
import AdminDrawer from "@/components/admin/AdminDrawer";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminProductsView from "@/components/admin/AdminProductsView";
import HomePage from "@/pages/HomePage";

export default async function BlogsPage() {
  return (
    <main>
      <h1>BlogsPage</h1>
      <AdminBlogsView />
    </main>
  );
}
