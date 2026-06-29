import { createClient } from "@/lib/supabase/client";

type SignInData = {
  email: string;
  password: string;
};

export async function signIn({ email, password }: SignInData) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}