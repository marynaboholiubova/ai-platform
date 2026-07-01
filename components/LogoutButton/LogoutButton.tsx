"use client";

import { useRouter } from "next/navigation";
import { logout } from "@/app/actions/auth/logout";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    try {
      await logout();

      router.replace("/login");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Logout failed.");
    }
  }

  return <button onClick={handleLogout}>Logout</button>;
}