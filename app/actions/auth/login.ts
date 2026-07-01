"use server";

import { createClient } from "@/lib/supabase/server";

type LoginData = {
  email: string;
  password: string;
};

export async function login({ email, password }: LoginData) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return { success: true };
}