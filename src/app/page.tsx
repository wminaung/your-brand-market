import HomePage from "@/views/HomeView";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
  if (!session) {
    console.log("s", session);

    redirect("/signin");
  }

  return (
    <main>
      <HomePage />
    </main>
  );
}
