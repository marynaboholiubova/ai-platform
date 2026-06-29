import { createClient } from "@/lib/supabase/client";

type CreateCompanyData = {
  name: string;
  website: string;
  industry: string;
  language: string;
};

function generateSlug(name: string) {
  const base = name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `${base}-${crypto.randomUUID().slice(0, 8)}`;
}

export async function createCompany(data: CreateCompanyData) {
  const supabase = createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    throw new Error("User not authenticated.");
  }

  const slug = generateSlug(data.name);

  const { data: company, error } = await supabase
    .from("companies")
    .insert({
      name: data.name,
      slug,
      website: data.website,
      industry: data.industry,
      language: data.language,
    })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  const { error: companyUserError } = await supabase
    .from("company_users")
    .insert({
      company_id: company.id,
      user_id: user.id,
      role: "owner",
    });

  if (companyUserError) {
    throw new Error(companyUserError.message);
  }

  return company;
}