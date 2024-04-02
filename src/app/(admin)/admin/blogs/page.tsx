import AdminBlogsView from "@/components/admin/AdminBlogsView";
import AdminDrawer from "@/components/admin/AdminDrawer";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminProductsView from "@/components/admin/AdminProductsView";
import HomePage from "@/views/HomeView";

export default async function BlogsPage() {
  return (
    <main>
      <h1>BlogsPage</h1>
      <AdminBlogsView />
    </main>
  );
}
