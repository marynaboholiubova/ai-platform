"use server";

import { createClient } from "@/lib/supabase/server";

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
  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    throw new Error("User not authenticated.");
  }

  const { data: existingCompanyUser } = await supabase
    .from("company_users")
    .select("company_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (existingCompanyUser) {
    return existingCompanyUser;
  }

  const { data: company, error } = await supabase
    .from("companies")
    .insert({
      name: data.name,
      slug: generateSlug(data.name),
      website: data.website,
      industry: data.industry,
      language: data.language,
    })
    .select()
    .single();

  if (error || !company) {
    throw new Error(error?.message || "Company was not created.");
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