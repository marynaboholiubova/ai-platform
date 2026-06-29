"use server";

import { createClient } from "@/lib/supabase/server";

type RegisterData = {
  companyName: string;
  email: string;
  password: string;
};

export async function registerCompany({
  companyName,
  email,
  password,
}: RegisterData) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        company_name: companyName,
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}