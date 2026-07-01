import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import SetupWizard from "@/components/dashboard/SetupWizard/SetupWizard";
import LogoutButton from "@/components/LogoutButton/LogoutButton";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: companyUser, error } = await supabase
    .from("company_users")
    .select("company_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  if (!companyUser) {
    return (
      <>
        <LogoutButton />
        <SetupWizard />
      </>
    );
  }

  return (
    <>
      <LogoutButton />

      <main>
        <h1>Dashboard</h1>
        <p>Welcome to your AI Consultant Platform.</p>
      </main>
    </>
  );
}