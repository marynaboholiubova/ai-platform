import { createClient } from "@/lib/supabase/client";

type SignUpData = {
  companyName: string;
  email: string;
  password: string;
};

export async function signUp({
  companyName,
  email,
  password,
}: SignUpData) {
  const supabase = createClient();

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